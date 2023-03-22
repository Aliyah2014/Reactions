// import React from 'react';
// import { useContext } from'react';
// import Image from './Image';
// import ImagesContext from '../context/ImagesContext';
// import ImageContext  from '../contexts/ImageContext';
// import { Container } from 'react-bootstrap';

// const Images = () => {
//     const { response, isLoading} = useContext(ImagesContext);

//     return (
//     <>
//             <h1 className="text-center mt-6 underline text-2xl">Results for</h1>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
//                 {response.map((data, key) => <Image key={key} data={data} />)}
//             <h1>Image 1</h1>
//             <h1>Image 1</h1>
//             <h1>Image 1</h1>
//             <h1>Image 1</h1>
//             <h1>Image 1</h1>
//             <h1>Image 1</h1>
//             </div>

//         </>
//     )
// }

// export default Images;