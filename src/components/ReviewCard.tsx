interface ReviewData {
  name: string
  avatar: string
  date: string
  text: string
  moreText?: string
}

export default function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <div className="review-card animate-fade-in">
      <div className="review-top">
        <img
          src={review.avatar}
          alt={review.name}
          className="review-avatar"
          referrerPolicy="no-referrer"
          width={50}
          height={50}
        />
        <div>
          <div className="review-name">{review.name}</div>
          <div className="review-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            <span className="review-date">{review.date}</span>
          </div>
        </div>
      </div>
      <div className="review-text show-full">
        {review.text}
        {review.moreText && (
          <span className="review-text-more"> {review.moreText}</span>
        )}
      </div>
    </div>
  )
}
