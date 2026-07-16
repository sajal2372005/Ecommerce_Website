import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import logo from '../assets/Fashion.png';
import './Header.css';




const PDF = ({ orderData, paymentDetails }) => {

    if (!orderData || orderData.length === 0) {
        return (
            <Document>
                <Page size="A4" style={{ padding: 40, fontFamily: 'Helvetica' }}>
                    <Text style={{ fontSize: 14 }}>No order data available.</Text>
                </Page>
            </Document>
        );
    }

    const myDate = new Date();
    const orderDate = myDate.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    const paymentmethod = paymentDetails ? paymentDetails.payload.payment.method : 'Not specified';
    const paymentId = paymentDetails ? paymentDetails.payload.payment.id : 'Not specified';
    const userName = localStorage.getItem('UserName') || 'Customer';
    const userEmail = localStorage.getItem('email') || 'Email';
    const orderId = localStorage.getItem('rzp_stored_checkout_id') || 'Order ID';


    const totalAmount = orderData.reduce((sum, item) => sum + (item.price * item.count), 0);

    return (
        <Document>
            <Page size="A4" style={{ padding: 40, fontFamily: 'Helvetica' }}>
                <View style={{ width: "100%", height: "100%", padding: 20, borderWidth: 1, borderColor: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#000', paddingBottom: 10, marginBottom: 10 }}>
                            <Image src={logo} alt="logo" style={{ width: 80 }} />
                            
                            <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>

                                <Text style={{ fontSize: 10, color: '#555', marginBottom: 2 }}>support@fashion.com</Text>
                                <Text style={{ fontSize: 10, color: '#555', marginBottom: 2 }}>+91-96647 XXXXX</Text>
                                <Text style={{ fontSize: 10, color: '#555' }}>GSTIN / VAT: 22AAAAA0000A1Z5</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: 30, textAlign: 'center' }}> 

                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Order Invoice</Text>
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}>Order ID: </Text>
                                <Text style={{ fontSize: 12 }}>{orderId}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}>Payment ID: </Text>
                                <Text style={{ fontSize: 12 }}>{paymentId}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}> Payment Method: </Text>
                                <Text style={{ fontSize: 12 }}>{paymentmethod}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}>Customer Name: </Text>
                                <Text style={{ fontSize: 12 }}>{userName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}>Email:</Text>
                                <Text style={{ fontSize: 12 }}>{userEmail}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}>Order Date:</Text>
                                <Text style={{ fontSize: 12 }}>{orderDate}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", backgroundColor: "#000", padding: 8, alignItems: 'center' }}>
                            <Text style={{ color: "#fff", fontSize: 12, width: "16%", textAlign: 'center' }}>Item No.</Text>
                            <Text style={{ color: "#fff", fontSize: 12, width: "52%", textAlign: 'left' }}>Product Name</Text>
                            <Text style={{ color: "#fff", fontSize: 12, width: "16%", textAlign: 'center' }}>Qty</Text>
                            <Text style={{ color: "#fff", fontSize: 12, width: "16%", textAlign: 'center' }}>Price</Text>
                        </View>

                        {orderData.map((item, index) => (
                            <View
                                key={item.id ?? index}
                                style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 8, alignItems: 'center' }}
                            >
                                <Text style={{ fontSize: 12, width: "16%", textAlign: 'center' }}>{index + 1}</Text>
                                <Text style={{ fontSize: 12, width: "52%", textAlign: 'left' }}>{item.title}</Text>
                                <Text style={{ fontSize: 12, width: "16%", textAlign: 'center' }}>{item.count}</Text>
                                <Text style={{ fontSize: 12, width: "16%", textAlign: 'center' }}>${item.price}</Text>
                            </View>
                        ))}

                        <View style={{ borderTopWidth: 1, borderColor: '#000', flexDirection: "row", padding: 8, alignItems: 'space-around' }}>
                            <Text style={{ color: "#000", fontSize: 12, width: "50%", textAlign: 'left', paddingLeft: 20 }}>Total Amount:</Text>
                            <Text style={{ color: "#000", fontSize: 12, width: "50%", textAlign: 'right', paddingRight: 20 }}>${totalAmount.toFixed(2)}</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{ fontSize: 12 }}>
                            Thanks for choosing Fashion. We hope you love your new gear! Tag us in your photos to be featured on our page.
                        </Text>
                    </View>

                </View>
            </Page>
        </Document>
    );
};

export default PDF;