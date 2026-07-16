import { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDF from './Pdf.jsx';
import * as motion from "motion/react-client"
import { useAppContext } from '../context/Context.jsx';

const InvoicePreviewPage = () => {
    const { paymentDetails } = useAppContext();
    const [orderData, setOrderData] = useState(() => {
        const temp = localStorage.getItem('previousOrder');
        return temp ? JSON.parse(temp) : null;
    });



    return (
        <div>
            <>

                <div style={{ paddingTop: '80px', textAlign: 'center', display: "flex", justifyContent: "flex-end", paddingRight: "1%" }}>
                    <PDFDownloadLink document={<PDF orderData={orderData} paymentDetails={paymentDetails} />} fileName="Order_Invoice.pdf">
                        {({ loading }) =>
                            loading ? <button>Loading document...</button>
                                :
                                <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} onClick={() => { localStorage.removeItem("previousOrder"); setOrderData(null) }} className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-black transition-colors" >
                                    Download Invoice
                                </motion.button>
                        }
                    </PDFDownloadLink>
                </div>
                <div style={{ width: '100%', height: '100vh', paddingTop: '10px' }}>
                    <PDFViewer width="100%" height="100%">
                        <PDF orderData={orderData} paymentDetails={paymentDetails} />
                    </PDFViewer>
                </div>


            </>
        </div>
    );
};

export default InvoicePreviewPage;