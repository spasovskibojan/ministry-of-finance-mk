import './App.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import NewsPageItem, {newsItemLoader} from "./pages/NewsPageItem.jsx";
import Ministry from "./pages/Ministry.jsx";
import MinisterPage from "./pages/MinisterPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ResourcePage from "./pages/ResourcePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ContactTeamPage from "./pages/ContactTeamPage.jsx";
import JobListings from "./components/JobListings.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import JobPage, {jobLoader} from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

import {collection, addDoc, deleteDoc, doc, setDoc} from 'firebase/firestore'
import {db} from "./config/firebase.js";
import EServices from "./components/EServices.jsx";


const App = () => {

    const jobsCollectionRef = collection(db, "jobs")
    //Add job
    const addJob = async (newJob) => {
        try{
            await addDoc(jobsCollectionRef, newJob)
        } catch (err){
            console.error(err)
        }
    }

    // Delete job
    const deleteJob = async (id) => {   // DO TUKA STIGNAH ID NOT DEFINED KOGA DELETNES JOB
        try{
            const jobDoc = doc(db, "jobs", id)
            await deleteDoc(jobDoc)
        } catch (err){
            console.error(err)
        }
    }

    // Update job
    const updateJob = async (job) => {
        try {
            const jobDoc = doc(db, "jobs", job.id)
            await setDoc(jobDoc, job)
        } catch (err) {
            console.error(err)
        }
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>

                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/news/:id' element={<NewsPageItem/>} loader={newsItemLoader}/>

                <Route path='/ministry' element={<Ministry/>}/>
                <Route path='/ministry/minister-of-finance' element={<MinisterPage role="minister"/>}/>
                <Route path='/ministry/deputy-minister' element={<MinisterPage role="deputy"/>}/>

                <Route path='/resources/:page' element={<ResourcesPage/>}/>
                <Route path='/resources' element={<ResourcePage/>}/>

                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/services/jobs' element={<JobListings/>}/>
                <Route path='/services/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
                <Route path='/services/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
                <Route path='/services/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
                <Route path='/services/e-services' element={<EServices />}/>

                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/contact/team' element={<ContactTeamPage/>}/>

                <Route path='/sign-in' element={<SignInPage/>}/>


                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
};

export default App;

// SERVER MODIFYING

// Add new job
// const addJob = async (newJob) => {
//     const res = await fetch('/jobs-api/jobs', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newJob)
//     })
//     return
// }

// Delete job
// const deleteJob = async (id) => {
//     const res = await fetch(`/jobs-api/jobs/${id}`, {
//         method: 'DELETE',
//     })
//     return
// }

// Update job
// const updateJob = async (job) => {
//     const res = await fetch(`/jobs-api/jobs/${job.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(job)
//     })
//     return
// }
