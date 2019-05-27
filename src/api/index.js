import instance from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const api = {    
    // login    
    login (params) {        
        return instance.post('/apis/users/login',qs.stringify(params));    
    },    
    // 其他接口…………
}

export default api;











