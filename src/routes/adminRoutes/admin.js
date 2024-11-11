const express = require('express');
const multer = require('multer');
const path = require('path');

const {saveBasic} = require('../../controllers/admin/basics/basic');
const {addProduct} = require('../../controllers/admin/product/addproduct');
const addQuote = require('../../controllers/admin/Quote/addQuote');
const { addHeroSection } = require('../../controllers/admin/hellloPage/addHeroSection');
const { addAppHeroSection } = require('../../controllers/admin/appHeroSection/addAppHeroSection');
const {companyheader} = require('../../controllers/admin/companyPage/companyHeader/companyHeader');
const {addCEOInfo} = require('../../controllers/admin/companyPage/ceo/addCEOInfo');
const { addCourses } = require('../../controllers/admin/courses/addCourses');
const { addEmployees } = require('../../controllers/admin/companyPage/employees/addEmployees');
const {addtrainingAndCoachig} = require('../../controllers/admin/trainingAndCoachig/addtrainingAndCoachig')
const { addTraining } = require('../../controllers/admin/training/addtraining');
const { getInTouch } = require('../../controllers/admin/getInTouch/getInTouch');
const { addWidget } = require('../../controllers/admin/widgets/widgets');
const { addSponsoredCompanies } = require('../../controllers/admin/sponsoredCompanies/addSponsoredCompanies');
const { addCompanyCooperation } = require('../../controllers/admin/companyCooperation.js/addCompanyCooperation');
const { saveParticipant } = require('../../controllers/admin/participant.js/saveParticipant');
const { updateParticipantStatus } = require('../../controllers/admin/participant.js/updateParticipant');
const { addNews } = require('../../controllers/admin/news/addNew');




const { getBasic } = require('../../controllers/admin/basics/getBasic');
const { getProduct } = require('../../controllers/admin/product/getProduct');
const { getQuote } = require('../../controllers/admin/Quote/getQuote');
const {getHeroSection} = require('../../controllers/admin/hellloPage/getHeroSection');
const { getAppHeroSection } = require('../../controllers/admin/appHeroSection/getAppHeroSection');
const { getcompanyAbout } = require('../../controllers/admin/companyAboutSection/getcompanyAbout');
const { getCompanyHeader } = require('../../controllers/admin/companyPage/companyHeader/getCompanyheader');
const { getCEOInfo } = require('../../controllers/admin/companyPage/ceo/getCEOInfo');
const { getEmployees } = require('../../controllers/admin/companyPage/employees/getEmployees');
const { getTrainingAndCoachig } = require('../../controllers/admin/trainingAndCoachig/getTrainingAndCoaching');
const { getCourses } = require('../../controllers/admin/courses/getCourses');
const { getTraining } = require('../../controllers/admin/training/getTraining');
const { getTrainingbyType } = require('../../controllers/admin/training/getTrainingbyType');

const { getWidget } = require('../../controllers/admin/widgets/getWidget');
const { getAllSponsoredCompanies } = require('../../controllers/admin/sponsoredCompanies/getAllSponsoredCompanies');
const { getAllCompanyCooperation } = require('../../controllers/admin/companyCooperation.js/getAllCompanyCooperation');
const { getNews } = require('../../controllers/admin/news/getnews');

const { getNewsById } = require('../../controllers/admin/news/getNewsById');


const { updateBasic } = require('../../controllers/admin/basics/updateBasic');
const { updateAppHeroSection } = require('../../controllers/admin/appHeroSection/updateupdateAppHeroSection');
const { updateCourses } = require('../../controllers/admin/courses/updateCourses');
const { updateTrainingAndCoachig } = require('../../controllers/admin/trainingAndCoachig/updateTrainingAndCoachig');
const { updateProduct } = require('../../controllers/admin/product/updateProduct');
const { updateHeroSection } = require('../../controllers/admin/hellloPage/updateHeroSection');
const { updateQuote } = require('../../controllers/admin/Quote/updateQuote');
const { updateEmployees } = require('../../controllers/admin/companyPage/employees/updateEmployees');
const { updateCompanyHeader } = require('../../controllers/admin/companyPage/companyHeader/updateCompanyHeader');
const { updateCEOInfo } = require('../../controllers/admin/companyPage/ceo/updateCEOInfo');
const { updateTraining } = require('../../controllers/admin/training/updateTraining');
const { updateWidget } = require('../../controllers/admin/widgets/updateWidget');
const { updateNews } = require('../../controllers/admin/news/updateNews');



const { deleteAppHeroSection } = require('../../controllers/admin/appHeroSection/deleteAppHeroSection');
const { deleteCourses } = require('../../controllers/admin/courses/deleteCourse');
const { deleteQuote } = require('../../controllers/admin/Quote/deleteQuote ');
const { deleteProduct } = require('../../controllers/admin/product/deleteProduct');
const { deleteTrainingAndCoaching } = require('../../controllers/admin/trainingAndCoachig/deleteTrainingAndCoaching');
const { deleteHeroSection } = require('../../controllers/admin/hellloPage/deleteHeroSection');
const { deleteEmployees } = require('../../controllers/admin/companyPage/employees/deleteEmployees');
const { deleteTraining } = require('../../controllers/admin/training/deleteTraining');
const { deleteSponsoredCompany } = require('../../controllers/admin/sponsoredCompanies/deleteSponsoredCompany');
const { deleteCompanyCooperation } = require('../../controllers/admin/companyCooperation.js/deleteCompanyCooperation');
const { deleteWidget } = require('../../controllers/admin/widgets/deleteWidget');
const { deleteNews } = require('../../controllers/admin/news/deleteNews');


const tokenAuthentication = require('../../middlewares/tokenAuthentication');
const { getAllParticipants } = require('../../controllers/admin/participant.js/getAllParticipants');
const { deleteParticipant } = require('../../controllers/admin/participant.js/deleteParticipants');


const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}_${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.use('/uploads', express.static(path.join(__dirname, '../../uploads')));


// ExamPreparation
const {addexamPreparation} = require('../../controllers/admin/eduTRAIN/examPreparation/addexamPreparation');
const {updateExamPreparation} = require('../../controllers/admin/eduTRAIN/examPreparation/updateexamPreparation');
const {getExamPreparations} = require('../../controllers/admin/eduTRAIN/examPreparation/getexamPreparation');
const {DeleteExamPreparation} = require('../../controllers/admin/eduTRAIN/examPreparation/deleteexamPreparation');
router.post('/addExamPreparation',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addexamPreparation);
router.post('/updateExamPreparation/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateExamPreparation);
router.get('/getExamPreparation', getExamPreparations);
router.delete('/deleteExamPreparation/:id',tokenAuthentication, DeleteExamPreparation);

// furtherTraining
const {addfurtherTraining} = require('../../controllers/admin/eduTRAIN/furtherTraining/addfurtherTraining');
const {updatefurtherTraining} = require('../../controllers/admin/eduTRAIN/furtherTraining/updatefurtherTraining');
const {getfurtherTrainings} = require('../../controllers/admin/eduTRAIN/furtherTraining/getfurtherTraining');
const {deletefurtherTraining} = require('../../controllers/admin/eduTRAIN/furtherTraining/deletefurtherTraining');
router.post('/addfurtherTraining',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addfurtherTraining);
router.post('/updatefurtherTraining/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updatefurtherTraining);
router.get('/getfurtherTrainings', getfurtherTrainings);
router.delete('/deletefurtherTraining/:id',tokenAuthentication, deletefurtherTraining);

// InhouseTraining
const {addInhouseTraining} = require('../../controllers/admin/eduTRAIN/InhouseTraining/addInhouseTraining');
const {updateInhouseTraining} = require('../../controllers/admin/eduTRAIN/InhouseTraining/updateInhouseTraining');
const {getInhouseTrainings} = require('../../controllers/admin/eduTRAIN/InhouseTraining/getInhouseTraining');
router.post('/addInhouseTraining',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addInhouseTraining);
router.post('/updateInhouseTraining/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateInhouseTraining);
router.get('/getInhouseTrainings', getInhouseTrainings);

// forCompanie
const {addforCompanie} = require('../../controllers/admin/eduTORIA/forCompanies/addforCompany');
const {updateforCompanie} = require('../../controllers/admin/eduTORIA/forCompanies/updateforCompany');
const {getforCompanies} = require('../../controllers/admin/eduTORIA/forCompanies/getforCompany');
router.post('/addforCompanie',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addforCompanie);
router.post('/updateforCompanie/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateforCompanie);
router.get('/getforCompanies', getforCompanies);

// forTrainees
const {addforTrainees} = require('../../controllers/admin/eduTORIA/forTrainees/addforTraine');
const {updateforTrainees} = require('../../controllers/admin/eduTORIA/forTrainees/updateforTraine');
const {getforTraineess} = require('../../controllers/admin/eduTORIA/forTrainees/getforTraine');
router.post('/addforTrainees',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addforTrainees);
router.post('/updateforTrainees/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateforTrainees);
router.get('/getforTraineess', getforTraineess);

// for Pupils
const {addforPupils} = require('../../controllers/admin/InstaZubi/instaZubiPupils/addforPupils');
const {updateforPupils} = require('../../controllers/admin/InstaZubi/instaZubiPupils/updateforPupils');
const {getforPupilss} = require('../../controllers/admin/InstaZubi/instaZubiPupils/getforPupils');
router.post('/addforPupils',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addforPupils);
router.post('/updateforPupils/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateforPupils);
router.get('/getforPupils', getforPupilss);

// instaZubiCompanies
const {addinstaZubiCompanie} = require('../../controllers/admin/InstaZubi/instaZubiCompanies/addinstaZubiCompanies');
const {updateinstaZubiCompanie} = require('../../controllers/admin/InstaZubi/instaZubiCompanies/updateinstaZubiCompanies');
const {getinstaZubiCompanies} = require('../../controllers/admin/InstaZubi/instaZubiCompanies/getforCompany');
router.post('/addinstaZubiCompanie',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addinstaZubiCompanie);
router.post('/updateinstaZubiCompanie/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateinstaZubiCompanie);
router.get('/getinstaZubiCompanies', getinstaZubiCompanies);


// instaZubisec
const {addinstaZubi} = require('../../controllers/admin/hellloPage/instaZubi/addinstaZubi');
const {updateinstaZubi} = require('../../controllers/admin/hellloPage/instaZubi/updateinstaZubi');
const {getinstaZubis} = require('../../controllers/admin/hellloPage/instaZubi/getinstaZubi');
router.post('/addinstaZubi',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addinstaZubi);
router.post('/updateinstaZubi/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateinstaZubi);
router.get('/getinstaZubis', getinstaZubis);

// newssec
const {addnewsSec} = require('../../controllers/admin/hellloPage/newsSec/addnewsSec');
const {updatenewsSec} = require('../../controllers/admin/hellloPage/newsSec/updatenewsSec');
const {getnewsSecs} = require('../../controllers/admin/hellloPage/newsSec/getnewsSec');
router.post('/addnewsSec',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addnewsSec);
router.post('/updatenewsSec/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updatenewsSec);
router.get('/getnewsSecs', getnewsSecs);


// joblisting
const {addJobListing} = require('../../controllers/admin/jobListing/addJobListing');
const {updateJobListing} = require('../../controllers/admin/jobListing/updateJobListing');
const {getJobListings} = require('../../controllers/admin/jobListing/getJobListings');
const {deleteJobListing} = require('../../controllers/admin/jobListing/deleteJobListing');
// const { getJobListingById } = require('../../controllers/admin/jobListing/getJobListingById');

router.post('/addJobListing',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addJobListing);
router.post('/updateJobListing/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateJobListing);
router.get('/getJobListings', getJobListings);
router.delete('/deleteJobListing/:id',tokenAuthentication, deleteJobListing);
//  router.get('/job-listing/:id', getJobListingById);

// Job Application
const { saveJobApplication } = require('../../controllers/admin/jobAplication/savejobAplication');
const { updateJobApplicationStatus } = require('../../controllers/admin/jobAplication/updatejobAplication');
const { getAllJobApplications } = require('../../controllers/admin/jobAplication/getAlljobAplication');
const { deleteJobApplication } = require('../../controllers/admin/jobAplication/deletejobAplication');

router.post('/saveJobApplication',upload.fields([{ name: 'resume', maxCount: 1 }]),saveJobApplication)
router.post('/acceptJob/:id', updateJobApplicationStatus('accepted'));
router.post('/rejectJob/:id', updateJobApplicationStatus('rejected'));
router.get('/getAllJobApplications', getAllJobApplications)
router.delete('/deleteJobApplication/:id', deleteJobApplication);



// Post API's
router.post('/basic', upload.fields([{ name: 'smallLogo', maxCount: 1 }, { name: 'largeLogo', maxCount: 1 }]), tokenAuthentication, saveBasic);
router.post('/addProduct',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addProduct);
router.post('/quote', tokenAuthentication, addQuote);
router.post('/addHeroSection', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addHeroSection );
router.post('/appHeroSection', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addAppHeroSection);
router.post('/addCompanyHeader', tokenAuthentication, companyheader)
router.post('/addCEOInfo', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addCEOInfo );
router.post('/addEmployees', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addEmployees );
router.post('/addCourses', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , addCourses );
router.post('/addTrainingAndCoaching', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , addtrainingAndCoachig);
router.post('/addTraining', tokenAuthentication, addTraining);
router.post('/addWidget', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication,addWidget );
router.post('/addSponsoredCompanies', upload.array('images', 10), tokenAuthentication, addSponsoredCompanies);
router.post('/addCompanyCooperation', upload.array('images', 10), tokenAuthentication, addCompanyCooperation);
router.post('/addCompanyCooperation', upload.array('images', 10), tokenAuthentication, addCompanyCooperation);
router.post('/addNews', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, addNews );


//update API's
router.post('/updatebasic', upload.fields([{ name: 'smallLogo', maxCount: 1 }, { name: 'largeLogo', maxCount: 1 }]), tokenAuthentication, updateBasic);
router.post('/updateQoute/:id', tokenAuthentication, updateQuote)
router.post('/appHeroSection/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateAppHeroSection);
router.post('/courses/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , updateCourses );
router.post('/updateTrainingAndCoaching/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication , updateTrainingAndCoachig );
router.post('/updateProduct',upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateProduct);
router.post('/updateHeroSection/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateHeroSection );
router.post('/updateEmployee/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateEmployees );
router.post('/updateCompanyHeader', tokenAuthentication, updateCompanyHeader)
router.post('/updateCEOInfo', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateCEOInfo );
router.post('/updateTraining/:id', updateTraining)
router.post('/updateWidget/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication,updateWidget );
router.post('/getInTouch', getInTouch);
router.post('/saveParticipant', saveParticipant)
router.post('/accept/:id', updateParticipantStatus('accepted'));
router.post('/reject/:id', updateParticipantStatus('rejected'));
router.post('/updateNews/:id', upload.fields([{ name: 'image', maxCount: 1 }]), tokenAuthentication, updateNews);


// Delete API's
router.delete('/appHeroSection/:id',tokenAuthentication, deleteAppHeroSection);
router.delete('/courses/:id',tokenAuthentication, deleteCourses);
router.delete('/deleteQuote/:id',tokenAuthentication, deleteQuote);
router.delete('/deleteProduct/:id',tokenAuthentication, deleteProduct);
router.delete('/deleteTrainingAndCoaching/:id',tokenAuthentication, deleteTrainingAndCoaching);
router.delete('/deleteHeroSection/:id',tokenAuthentication, deleteHeroSection);
router.delete('/deleteEmployee/:id',tokenAuthentication, deleteEmployees);
router.delete('/deleteTraining/:id', deleteTraining)
router.delete('/deleteSponsoredCompany/:imageId', deleteSponsoredCompany)
router.delete('/deleteCompanyCooperation/:imageId', deleteCompanyCooperation)
router.delete('/deleteWidget/:id', deleteWidget);
router.delete('/deleteParticipant/:id', deleteParticipant);
router.delete('/deleteNews/:id',tokenAuthentication, deleteNews);


// Get API's
router.get('/basic', getBasic);
router.get('/product', getProduct);
router.get('/quote', getQuote);
router.get('/heroSection', getHeroSection);
router.get('/appHeroSection', getAppHeroSection);
router.get('/companyAbout', getcompanyAbout);
router.get('/companyHeader', getCompanyHeader);
router.get('/ceoInfo', getCEOInfo);
router.get('/employees', getEmployees);
router.get("/trainingAndCoaching", getTrainingAndCoachig);
router.get("/getcourses", getCourses);
router.get('/getTraining', getTraining)
router.get('/getWidgets', getWidget)
router.get('/getAllSponsoredCompanies', getAllSponsoredCompanies)
router.get('/getAllCompanyCooperation', getAllCompanyCooperation)
router.get('/getAllParticipants', getAllParticipants)
router.get('/getNews', getNews)
router.get('/getNewsById/:id', getNewsById)
router.post('/getTrainingbyType', getTrainingbyType)


module.exports = router;
