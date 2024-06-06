// async function getBlog(id) {
//     try {
//       const apiResponse = await fetch(`http://localhost:3000/api/get-blog/${id}`, {
//         method: 'GET',
//         cache: 'no-store',
//       });
  
//       const result = await apiResponse.json();
//       return result.data;
//     } catch (err) {
//       throw new Error(err);
//     }
//   }
  


export default  function BlogDetail() {
    // const blog = await getBlog();
    // console.log(blog)
  return (
    <div>BlogDetail</div>
  )
}
