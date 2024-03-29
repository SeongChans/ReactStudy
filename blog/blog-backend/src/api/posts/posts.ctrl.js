import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkOwnPost = (ctx, next) => {
    const { user, post } = ctx.state;
    if (post.user._id.toString() !== user._id) {
        ctx.status = 403;
        return;
    }
    return next();
};

export const getPostById = async (ctx, next) => {
    const { id } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return;
    }
    try {
        const post = await Post.findById(id);
        //포스트가 존재하지 않을 때
        if (!post) {
            ctx.status = 404; // Not Found
            return;
        }
        ctx.state.post = post;
        return next();
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const write = async ctx => {
    const schema = Joi.object().keys({
        // 객체가 다음 필드를 가지고 있음을 검증
        title: Joi.string().required(), //required()가 있으면 필수 항목
        body: Joi.string().required(),
        tags: Joi.array()
        .items(Joi.string())
        .required(), //문자열로 이루어진 배열
    });

    // 검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if(result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({ //post의 인스턴스를 만들 때는 new 키워드를 사용함
        title,
        body,
        tags,
        user: ctx.state.user,
    });
    try {
        await post.save(); //save를 해야 저장됨. 반환값은 Promise로 async/await 문법으로
                        // 데이터베이스 저장 요청을 완료할 때까지 await를 사용하여 대기할 수 있음
                        // await을 사용할 떄는 try/catch문으로 오류를 처리해야함
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    //query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
    //값이 주어지지 않았다면 1을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);

    if(page < 1) {
        ctx.status = 400;
        return;
    }
    const { tag, username } = ctx.query;
    // tag,username 값이 유효하면 객체 안에 넣고 그렇지 않으면 넣지 않음
    const query = {
        ...(username ? {'user.username': username}: {}),
        ...(tag ? { tags: tag} : {}),
    };
    try {
        const posts = await Post.find(query)
            .sort({ _id: -1 }) //오름차수 1 , 내림차수 -1
            .limit(10) //갯수 제한하는 함수
            .skip((page - 1) * 10)
            .lean() // 방법 2 lean함수를 사용해 처음부터 JSON형태로 조회할 수 있음
            .exec(); //find 함수를 호출 후 exec()을 붙여줘야 서버에 쿼리를 요청함
        const postCount = await Post.countDocuments(query).exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map(post => ({
            ...post,
            body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)},,,`
        }));
        // 방법 1 : find를 통해 조회한 데이터 - JSON형태로 변환한 뒤 변형을 시켜야함
        /* ctx.body = posts
        .map(post => post.toJSON())
        .map(post => ({
            ...post,
            body: post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
        })); */
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = ctx => {
    ctx.body = ctx.state.post;
/*     const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if(!post) {
            ctx.status = 404; // NOT Found
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    } */
};

// 삭제 함수 remove(): 특정 조건을 만족하는 모든 데이터를 삭제
// findByIdRemove(): id를 찾아서 지웁니다.
// findOneAndRemove() : 특정 조건을 만족하는 데이터 하나를 찾아서 제거합니다.
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
    } catch(e) {
        ctx.throw(500, e);
    }
}; 

// 수정 함수 findByIdAndUpdate(id, 업데이트 내용, 업데이트 옵션)
export const update = async ctx => {
    const { id } = ctx.params;
    //write에서 사용한 schema와 비슷한데, required()가 없음
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string()),
    });

    //검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400; //Bad Request;
        ctx.body = result.error;
        return;
    }
    
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true, //이 값을 설정하면 업데이트된 데이터를 반환합니다.
            //false일 때는 업데이트 되기 전의 데이터를 반환합니다.
        }).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch(e) {
        ctx.throw(500, e);
    }
};