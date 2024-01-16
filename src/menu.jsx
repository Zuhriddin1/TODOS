function Main() {
  return (
    <div className="w-[540px] h-[439px] rounded-[5px] ">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="flex pt-[21px] pl-[72px] pr-[198px]">
        <form className="flex">
          <input type="radio" />
          <span>Complete online JavaScript course</span>
        </form>
        <form className="flex">
          <input type="radio" />
          <span>Jog around the park 3x</span>
        </form>
        <form className="flex">
          <input type="radio" />
          <span>10 minutes meditation</span>
        </form>
        <form className="flex">
          <input type="radio" />
          <span>Read for 1 hour</span>
        </form>
        <form className="flex">
          <input type="radio" />
          <span>Pick up groceries</span>
        </form>
        <form className="flex">
          <input type="radio" />
          <span>Complete Todo App on Frontend Mentor</span>
        </form>
      </div>
    </div>
  );
}
export default Main;
