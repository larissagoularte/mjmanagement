import { createContext, useState, useEffect, useCallback } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null))
    let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null))
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: e.target.email.value, password: e.target.password.value })
        });

        let data = await response.json();

        if(data){
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            console.log(data)
            setUser(jwtDecode(data.access))
            navigate('/')
        } else {
            alert('Something went wrong while logging in the user!')
        }
    }

    let registerUser = async (e) => {
        e.preventDefault();

        const firstName = e.target.first_name.value;
        const lastName = e.target.last_name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Make the POST request to the register endpoint
        const response = await fetch('http://127.0.0.1:8000/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            })
        });

        if(response.ok) {
            return true;
        } else {
            return false;
        }
    };

    const logoutUser = useCallback((e) => {
        if (e) {
            e.preventDefault();
        }
        localStorage.removeItem('authTokens');
        setAuthTokens(null);
        setUser(null);
        navigate('/login');
    }, [navigate]);

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        registerUser: registerUser,
    }

    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 60

        const updateToken = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({refresh:authTokens?.refresh})
            })
    
            const data = await response.json()
            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwtDecode(data.access))
                localStorage.setItem('authTokens',JSON.stringify(data))
            } else {
                logoutUser()
            }
    
            if(loading){
                setLoading(false)
            }
        }

        let interval;
        if(authTokens) {
                interval = setInterval(()=>{ 
                    updateToken()
                }, REFRESH_INTERVAL);
            }
        return () => clearInterval(interval)
    },[authTokens, loading, logoutUser])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}