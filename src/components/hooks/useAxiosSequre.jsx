export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSequre = () => {
    return axiosSecure;
};

export default useAxiosSequre;