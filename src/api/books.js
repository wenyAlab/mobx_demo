import axios from 'axios';

export default {

    /**
     * 获取首页数据
     * @returns {Promise.<*>}
     */
    async getBooksList(){
        return await axios.get('http://localhost:7000/books/list').then( ( res ) => res.data.data );
    },
    async getEBooksList(){
        return await axios.get('http://localhost:7000/books/ebook_list').then( ( res ) => res.data.data );
    },
    async getBookDetail(data){
        return await axios.post('http://localhost:7000/books/detail', data).then( ( res ) => res.data.data );
    },
    async getBookReviews(data){
        return await axios.post('https://api.douban.com/v2/book/1770782/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b', data).then( ( res ) => res.data.data );
    }
}