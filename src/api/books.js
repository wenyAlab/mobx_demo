import axios from 'axios';

export default {

    /**
     * 获取首页列表页数据
     * @returns {Promise.<*>}
     */
    async getBooksList(){
        return await axios.get('http://localhost:7000/books/list').then( ( res ) => res.data.data );
    }
}