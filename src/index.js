import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class Login extends React.Component{

    componentDidMount() {
        document.getElementsByTagName('input')[0].addEventListener('focus', () => {
            document.getElementsByTagName('input')[0].classList.add('focus')
        })

        document.getElementsByTagName('input')[1].addEventListener('focus', () => {
            document.getElementsByTagName('input')[1].classList.add('focus')
        })

        document.getElementsByTagName('input')[0].addEventListener('blur', () => {
            var index = document.getElementsByTagName('input')[0]
            if(index.value == ""){
                index.classList.remove('focus')
            }
        })

        document.getElementsByTagName('input')[1].addEventListener('blur', () => {
            var index = document.getElementsByTagName('input')[1]
            if(index.value == ""){
              index.classList.remove('focus')
            }
            
          })
    }

    render () {
        return (
            <div>
                <form action="index.html" className="login-form" >
                    <h1>Login</h1>
    
                    <div className="txtb">
                        <input type="text" />
                        <span data-placeholder="Username"><br/></span>
                    </div>
    
    
                    <div className="txtb">
                        <input type="password" />
                        <span data-placeholder="Password"><br/></span>
                    </div>
    
                    <input type="submit" className="logbtn" value="Login" />
    
                    <div className="bottom-text">
                        Don't have account? <a href="#">Sign up</a>
                    </div>
                </form>
            </div> 
        )
    }
}


// DOM의 내용을 메인 컴포넌트로 변경합니다.
ReactDOM.render(
  <Login />,
  document.getElementById('root'))