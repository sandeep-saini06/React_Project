import { Layout, StyleProvider } from '@repay/saguaro-web';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statement from './components/Statement';
import Amortization from './components/Amortization';
import AccountDetails from './components/AccountDetails';
import AutoPayEnrollment from './components/AutoPayEnrollment';
import CheckListRequest from './components/CheckListRequest';
import DefiScreen from './components/DefiScreen';
import DueDate from './components/DueDate';
import MakeARequest from './components/MakeARequest';
import MessageBox from './components/MessageBox';
import MyInformation from './components/MyInformation';
import OneTimePayment from './components/OneTimePayment';
import PaymentExtension from './components/PaymentExtension';
import PaymentHistory from './components/PaymentHistory';
import RequestPayoff from './components/RequestPayoff';
import RequestPayoffForm from './components/RequestPayoffForm';
import Testing from './components/Testing';
import Onboarding from './components/Onboarding';

function App() {
  return (
    <div className="App">
      <StyleProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<DefiScreen />} />
            <Route exact path="/details" element={<AccountDetails />} />
            <Route exact path="/payment" element={<OneTimePayment />} />
            <Route exact path="/payoff" element={<RequestPayoff />} />
            <Route exact path="/autopay" element={<AutoPayEnrollment />} />
            <Route exact path="/paymenthistory" element={<PaymentHistory />} />
            <Route exact path="/statement" element={<Statement />} />
            <Route exact path="/duedate" element={<DueDate />} />
            <Route exact path="/information" element={<MyInformation />} />
            <Route exact path="/payoffform" element={<RequestPayoffForm />} />
            <Route exact path="/makearequest" element={<MakeARequest />} />
            <Route exact path="/checklist" element={<CheckListRequest />} />
            <Route exact path="/amortization" element={<Amortization />} />
            <Route exact path="/paymentextension" element={<PaymentExtension />} />
            <Route exact path="/message" element={<MessageBox />} />
            <Route exact path="/test" element={<Testing />} />
            <Route exact path="/onboard" element={<Onboarding />} />
          </Routes>
        </Router>
      </StyleProvider>
    </div>
  );
}

export default App;
