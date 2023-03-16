const Feedback = ({ prop }) => {

    const feedbackCard = prop.map((singleFeedback) => (
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-2">
                    <p><strong>{singleFeedback.feedback.user}</strong></p>
                    <br />
                    <p>{singleFeedback.feedback.user - role}</p>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-text">{singleFeedback.feedback.text}</p>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            {props.length === 0 && <h3 key="loading">Data is loading...</h3>}
            {props.length > 0 && feedbackCard}
        </>
    )
}

export default feedbackComponent;