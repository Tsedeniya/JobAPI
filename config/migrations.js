
permissions =[
    'view all jobs',
     'view job',
     'add job',
     'delete job',
     'update job',

     'add user',
     'delete user',
     'veiw user',
     'veiw all user',
     'update user'

    

]

roles={
    admin:[...permissions],
    
}

users = [
    {
        full_name:'Tsedeniya Solomon',
        username: 'admin',
        email: 'tsedeniya@admin.com',
        password: 'tsedeniya123',
        roles: ['admin']
    }
]


module.exports = {permissions,roles,users}