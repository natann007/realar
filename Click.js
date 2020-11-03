import React from 'react';
import {render} from 'react-dom';

function Tr(props){
   const row = {...props.row};
   return (
      <tr>
         <td>{row.page}</td>
         <td>{row.element}</td>
         <td>{row.x}</td>
         <td>{row.y}</td>
      </tr>
   );
}

export default function Click(props){
   const data = [...JSON.parse(props.data)].map((obj,i) => (<Tr key={i+1} row={obj} />));
   if(!data || !data.length)
      return (
         <div className="container justify-content-center title">
            Not data found
         </div>
      );
   return (
      <div className="container justify-content-center">
         <div className="table-responsive">
            <table className="table table-bordered table-condensed">
               <caption>Clicks statistic table:</caption>
               <thead>
                  <tr>
                     <th>Page url</th>
                     <th>Html element</th>
                     <th>x-coord</th>
                     <th>y-coord</th>
                  </tr>
               </thead>
               <tbody>
                  {data}
               </tbody>
            </table>
         </div>
      </div>
    );
}

const clicks = document.getElementById('clicks');

(clicks) && render(<Click data={clicks.getAttribute('data')} />,clicks);