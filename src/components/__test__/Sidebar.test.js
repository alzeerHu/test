 import {render ,screen} from '@testing-library/react'
 import '@testing-library/jest-dom'

 import Sidebar from '../Blocks/Sidebar/Sidebar'

 describe("Test the Sidebar Component" , () =>{

    it('render the sidebare without error' ,() =>{
        render(<Sidebar/>)
    })

     test("the Sidebar component" ,() =>{
         const component= render(<Sidebar/>)
         let text1 = component.getByText('Money Laundering and Fraud Preventing');
         let text2 = component.getByText('IT security and information security');
         let text3 = component.getByText('Data Protection');
         let text4 = component.getByText('WpHG-Compliance');
         let text5 = component.getByText('Navigation');
         let text6 = component.getByText('Contact');
         let text7 = component.getByText('Money Laundering and Fraud Preventing');
         let text8 = component.getByText('IT security and information security');

         expect(text1).toBeInTheDocument();
         expect(text2).toBeInTheDocument();
         expect(text3).toBeInTheDocument();
         expect(text4).toBeInTheDocument();
         expect(text5).toBeInTheDocument();
         expect(text6).toBeInTheDocument();
         expect(text7).toBeInTheDocument();
         expect(text8).toBeInTheDocument();

     })

     test("render the Sidebar component icons" ,() =>{
         const component= render(<Sidebar/>)
         let icon1 = component.getByTestId('icon0');
         let icon2 = component.getByTestId('icon1');
         let icon3 = component.getByTestId('icon2');
         let icon4 = component.getByTestId('icon3');
        

     })

 })



//