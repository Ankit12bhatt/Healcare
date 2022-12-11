import React from 'react'

const general = () => {
  return (
    <>
    <div></div>
    <h1  style={{ marginTop:"10vh", display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}> General Check-up</h1>
            <div className="contain">
                <div className="main-heading">
                    <h1 className="mb-5"> </h1>
                </div>
                <div className="table-responsive" style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
                    <table className="table table-hover" cellSpacing="50">
                        <thead className="thead-dark" >
                            <tr>
                                <th style={{color: 'Black'}}>Name </th>
                                <th style={{color: 'Black'}}> Current Status</th>
                                <th style={{color: 'Black'}}> Normal Range</th>
                                <th style={{color: 'Black'}}> Description</th>
                               
                            </tr>
                        </thead>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>             Cholesterol </td>
                        <td style={{color:'black'}}> 120  </td>
                        <td style={{color:'black'}}> less than  200 mg/dL </td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}> BP2 </td>
                        <td style={{color:'black'}}> 140 </td>
                        <td style={{color:'black'}}> 120/70 to 120/80 </td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}> DHEA </td>
                        <td style={{color:'black'}}> 140 </td>
                        <td style={{color:'black'}}> F 130-980 ng/dL </td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>Glucose, urine </td>
                        <td style={{color:'black'}}> 1 </td>
                        <td style={{color:'black'}}> less than 0.05 g/dl </td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>Hemoglobin </td>
                        <td style={{color:'black'}}> 8.3 </td>
                        <td style={{color:'black'}}> F 12.0-16.0 g/dL </td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>Lactic acid </td>
                        <td style={{color:'black'}}> 2.8 </td>
                        <td style={{color:'black'}}> 0.5-2.2 mmol/L</td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>Red Blood Cell Count (RBC) </td>
                        <td style={{color:'black'}}> 4 </td>
                        <td style={{color:'black'}}> F 3.9-5.2 x 106/µL</td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>WBC (White blood cells, Leukocytes)</td>
                        <td style={{color:'black'}}> 7 </td>
                        <td style={{color:'black'}}> 4.5-11.0 x 103/mm3</td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>Testosterone</td>
                        <td style={{color:'black'}}> 34 </td>
                        <td style={{color:'black'}}> M 15.0-40.0 pg/mL</td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        <tbody className="tablebody">
                        <td style={{color:'black'}}>Urea, plasma (BUN)</td>
                        <td style={{color:'black'}}> 20 </td>
                        <td style={{color:'black'}}> 8-25 mg/dL</td>
                        <td style={{color:'black'}}> -NA- </td>
                        

                        </tbody>
                        </table>
                        </div>
                        </div>




    </>
    
  )
}

export default general