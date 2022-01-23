const BoardCommentsPresenter = ({rating, handleSaveRating}: any) => {
  return (
    <div>
      {[1,2,3,4,5].map((data:number) => (
        <img key={data} onClick={handleSaveRating} id={String(data)} alt='별' src={Number(rating) >= data ? '/star_fill.png' : '/star.png'} />
      ))}
      {/* next /하면 public폴더로 이동이 된다. */}
    </div>
  )
}

export default BoardCommentsPresenter;