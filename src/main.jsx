import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"manoj","emailId":"manoj@gmail.com","phoneNo":"13243424112","projects":[{"title":"manoj","description":"manoj","technologiesUsed":[],"_id":"674936dd0b8d4c7c0f1e2a8b"}],"resume":"","experiences":[{"companyName":"manoj","role":"manoj","description":"manoj","technologiesUsed":[],"duration":"manoj","_id":"674936dd0b8d4c7c0f1e2a8c"}],"techStacks":[],"contactDetailsUrls":[],"codingProfilesUrls":[],"certificationsUrls":[],"achievements":[{"title":"manoj","description":"manoj","_id":"674936dd0b8d4c7c0f1e2a8d"}],"about":"manoj","profilePhoto":"","_id":"674936dd0b8d4c7c0f1e2a8a","createdAt":"2024-11-29T03:37:01.277Z","updatedAt":"2024-11-29T03:37:01.277Z","__v":0}} />
  </StrictMode>,
)
