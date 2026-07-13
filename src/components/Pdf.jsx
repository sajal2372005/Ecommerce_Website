import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';

const PDF = ({ orderData }) => {
    const myDate = new Date();
    const orderDate = myDate.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    const userName = localStorage.getItem('UserName') || 'Customer';
    const userEmail = localStorage.getItem('email') || 'Email';
    const orderId = localStorage.getItem('rzp_stored_checkout_id') || 'Order ID';

    if (!orderData) {
        return (
            <Document>
                <Page size="A4" style={{ padding: 40, fontFamily: 'Helvetica' }}>
                    <Text style={{ fontSize: 14 }}>No order data available.</Text>
                </Page>
            </Document>
        );
    }

    const items = orderData.length > 0 ? orderData : [];

    return (
        <Document>
            <Page size="A4" style={{ padding: 40, fontFamily: 'Helvetica' }}>
                <View style={{ width: "100%", padding: 20, borderWidth: 1, borderColor: '#000' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#000', paddingBottom: 15, marginBottom: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Order Invoice</Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: 120 }}>Order ID: </Text>
                            <Text style={{ fontSize: 12 }}>{orderId}</Text>
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

                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <View
                                key={item.id ?? index}
                                style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 8, alignItems: 'center' }}
                            >
                                <Text style={{ fontSize: 12, width: "16%", textAlign: 'center' }}>{index + 1}</Text>
                                <Text style={{ fontSize: 12, width: "52%", textAlign: 'left' }}>{item.title}</Text>
                                <Text style={{ fontSize: 12, width: "16%", textAlign: 'center' }}>{item.count}</Text>
                                <Text style={{ fontSize: 12, width: "16%", textAlign: 'center' }}>${item.price}</Text>
                            </View>
                        ))
                    ) : (
                        <View style={{ padding: 8 }}>
                            <Text style={{ fontSize: 12 }}>No items in this order.</Text>
                        </View>
                    )}

                </View>
            </Page>
        </Document>
    );
};

export default PDF;