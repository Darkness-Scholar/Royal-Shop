import { atom } from 'recoil';
export const appData = atom({
    key: 'appData', // unique ID (with respect to other atoms/selectors)
    default: [
        {id: 1, code: "100001", price: 1000, name: 'San Pham 1', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 2, code: "100002", price: 1250, name: 'San Pham 2', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 3, code: "100003", price: 1500, name: 'San Pham 3', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 4, code: "100004", price: 1500, name: 'San Pham 4', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 5, code: "100005", price: 1500, name: 'San Pham 5', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 6, code: "100006", price: 1500, name: 'San Pham 6', rate: 5, desc:'San Pham Cua TungLone'}
    ]
});

export const latest = atom({
    key: 'latest', // unique ID (with respect to other atoms/selectors)
    default: [
        {id: 1, code: "100001", price: 1000000, name: 'San Pham 1', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 2, code: "100002", price: 1250000, name: 'San Pham 2', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 3, code: "100003", price: 1500000, name: 'San Pham 3', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 4, code: "100004", price: 1500000, name: 'San Pham 4', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 5, code: "100005", price: 1500000, name: 'San Pham 5', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 6, code: "100006", price: 1500000, name: 'San Pham 6', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 7, code: "100007", price: 1500000, name: 'San Pham 7', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 8, code: "100008", price: 1500000, name: 'San Pham 8', rate: 5, desc:'San Pham Cua TungLone'}
    ]
});

export const soon = atom({
    key: 'soon', // unique ID (with respect to other atoms/selectors)
    default: [
        {id: 1, code: "100001", price: 1000000, name: 'San Pham 1', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 2, code: "100002", price: 1250000, name: 'San Pham 2', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 3, code: "100003", price: 1500000, name: 'San Pham 3', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 4, code: "100004", price: 1500000, name: 'San Pham 4', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 5, code: "100005", price: 1500000, name: 'San Pham 5', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 6, code: "100006", price: 1500000, name: 'San Pham 6', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 7, code: "100007", price: 1500000, name: 'San Pham 7', rate: 5, desc:'San Pham Cua TungLone'},
        {id: 8, code: "100008", price: 1500000, name: 'San Pham 8', rate: 5, desc:'San Pham Cua TungLone'}
    ]
});

export const userData = atom({
    key: 'userData', // unique ID (with respect to other atoms/selectors)
    default: [
        {name: "Tùng", username: "", email: ""}
    ]
});