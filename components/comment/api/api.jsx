/*
    비동기통신에 대한 내용을 넣는공간
*/

export const getComment = async (dispatch) => {
    dispatch({ type: 'GET_COMMENT' })
    try {
        const response = await fetch('http://api.seong-jin.net/api/comment')
        const data = await response.json()

        const result = data.map(obj => {
            return { ...obj, date: obj.updatedAt.substr(0, 10) }
        })

        dispatch({ type: 'GET_COMMENT_SUCCESS', payload: result })
    } catch (e) {
        dispatch({ type: 'GET_COMMENT_ERROR', payload: e })
    }
}
//댓글쓰기
export const postComment = async (dispatch, body) => {
    dispatch({ type: 'POST_CMMENT' })
    try {
        //url:string ,option:object
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }
        const response = await fetch('http://api.seong-jin.net/api/comment', options)
        const data = await response.json()
        const result = { ...data, date: data.updatedAt.substr(0, 10) }

        dispatch({ type: 'POST_COMMENT_SUCCESS', payload:result })
    } catch (e) {
        dispatch({ type: 'POST_COMMENT_ERROR' })
    }
}
// export const getComment = async (dispatch) => {}
// export const getComment = async (dispatch) => {}