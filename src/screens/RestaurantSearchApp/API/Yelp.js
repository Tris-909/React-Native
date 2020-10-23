import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YoHfsH88McxwulYCXf0YwmAUCswNe-4TO0pHYG2uMrjUvYEJt8TOVgfNwAN9HJPfNJohkl5h9WSBGTaL7FJ-JvYLVMtk-U1St3H8gE_yzyECE5bG3ph5mGvVsLWQX3Yx'
    }   
});