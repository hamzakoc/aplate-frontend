export default {
    getReviews: () => {
        return fetch('/registered/review')
            .then(response => {
                if (response.status !== 401) {
                    return response.json().then(data => data);
                }
                else
                    return { message: { msgBody: "UnAuthorized", msgError: true } };
            });
    },
    postReview: review => {
        return fetch('/registered/review', {
            method: "post",
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status !== 401) {
                return response.json().then(data => data);
            }
            else
                return { message: { msgBody: "UnAuthorized" }, msgError: true };
        });
    }
}