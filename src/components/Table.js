import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function CustomizedTables({city}) {
  const [bank, setBank] = useState([]);
  const URI = "https://vast-shore-74260.herokuapp.com/banks?city="+city;
  const getBankData = async () => {
        try {
            const data = await axios.get(URI);
            console.log(data.data);
            setBank(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getBankData();
    },[city])

  return (
    <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Bank', field: 'bank_name' },
            { title: 'Address', field: 'address' },
            { title: 'Branch', field: 'branch'},
            { title: 'IFSC code', field: 'ifsc' }, 
            { title: 'State', field: 'state' } 
          ]}
          data={bank}
          title="Bank Details"
          options={{
            headerStyle: {
              backgroundColor: '#0080ff',
              color: '#FFF',
              fontSize: '14pt',
              position: 'initial'
            }
          }}
        />
      </div>
  );
}