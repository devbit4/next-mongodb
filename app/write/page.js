export default function Write() {
  return (
    <div>
      <h4 className='p-20'>글작성</h4>
      <form action='/api/post/new' method='POST'>
        <input name='title' placeholder='글제목'></input>
        <input name='content' placeholder='글내용'></input>
        <button type='submit'>버튼</button>
      </form>
    </div>
  );
}
