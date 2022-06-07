import AxiosProvider2 from "../AxiosProvider2";
 

export const login2 = ({ email, password }) => {
    return AxiosProvider2.post('/login', { email, password })
}


export const logout2 = (token) => {
    return AxiosProvider2.post('/logout', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}


export const listData2 = (token) => {
    return AxiosProvider2.get('/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const singleUser = (id,token) => {
    return AxiosProvider2.get(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const createUser = (body,token) => {
    return AxiosProvider2.post('/register',body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const deactivate = (id,token) => {
    return AxiosProvider2.patch(`/admin/users/${id}/activate`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const editUser= (id,body,token) => {
    return AxiosProvider2.patch(`/users/${id}`, body,{
        headers: {
            'Content-type': 'multipart/form-data',
            'Accept':'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
}

export const mission_All = (token) =>  {
    var params={
  
        class: 'mission'
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.get('/admin/requests', {params,headers});
}

export const wfh_all = (token) =>  {
    var params={
  
        class: 'wfh'
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.get('/admin/requests', {params,headers});
}

export const vacation_all = (token) =>  {
    var params={
  
        class: 'vacation'
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.get('/admin/requests', {params,headers});
}
export const mission2 = (object,token) => {
    var params={
        status: object.status,
        class: object.class
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.get('/admin/requests', {params,headers});
}

export const CompanyConfig = (token) => {
   
    return AxiosProvider2.get('/Config/1', 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const Attend = (endPoint,token) => {
   
    return AxiosProvider2.get(`/${endPoint}`, 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const Request = (object,token) => {
    var params={
        status: object.status,
        class: object.class
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.get('/admin/requests', {params,headers});
}

export const departments = (token) => {
    return AxiosProvider2.get(`/departments`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const delete_departments = (id,token) => {
    return AxiosProvider2.delete(`/departments/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const Departments_Create = (name,token) => {
    var params={
        name: name
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.post('/departments', params,{headers});
}


export const Departments_Edit = (id,name,token) => {
    var body={
        name: name,
      
    }
    return AxiosProvider2.patch(`/departments/${id}`,body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const mission_Details = (id,token) => {
    return AxiosProvider2.get(`/mission/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const JobTitles = (token) => {
    return AxiosProvider2.get(`/jobtitles`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}



export const JobTitles_Create = (name,token) => {
    var params={
        name: name
    }
    var headers= {
        Authorization: `Bearer ${token}`
    }
    return AxiosProvider2.post('/jobtitle', params,{headers});
}

export const JobTitles_Delete = (id,token) => {
    return AxiosProvider2.delete(`/jobtitles/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export const JobTitles_Edit = (id,name,token) => {
    var body={
        name: name,
      
    }
    return AxiosProvider2.patch(`/jobtitles/${id}`,body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const shifts = (token) => {
    return AxiosProvider2.get(`/Shifts`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export const Add_shifts = (body,token) => {
    return AxiosProvider2.post(`/Shifts`,body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const Edit_shifts = (id,body,token) => {
    return AxiosProvider2.patch(`/Shifts/${id}`,body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}



export const approve = (id,token) => {
    return AxiosProvider2.post(`/requests/${id}/approve`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const cancel = (id,token) => {
    return AxiosProvider2.post(`/requests/${id}/cancel`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const vacation = (month,token) => {
    return AxiosProvider2.get(`/Holidays/ofMonth/${month}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const addVacation = (body,token) => {
    return AxiosProvider2.post(`/Holidays`, body,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const editVacation = (id,body,token) => {
    return AxiosProvider2.patch(`/Holidays/${id}`, body,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const deleteVacation = (id,token) => {
    return AxiosProvider2.delete(`/Holidays/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const validate = (token) => {
    return AxiosProvider2.get(`/valid`,{
        headers: {
            Authorization: `Bearer ${token}`
      
        }
    });
}