import { memo } from 'react';
import { HostCardWrapper } from './style';
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

// const HostCard = memo(() => {
//   return (
//     <HostCardWrapper>
//       <div className='card-content'>
//         <div className='card-left'>
//           <div className='card-left-content'>
//             <div className='card-left-avatar'>
//               <img
//                 src='https://a0.muscache.com/im/pictures/user/User-570274313/original/d7c84454-58ca-47a3-8436-75ecca56cb0e.jpeg?im_w=240&im_format=avif'
//                 alt=''
//               />
//             </div>
//             <div className='card-left-info'>
//               <div className='name'>Jubileee</div>
//               <div className='desc'>
//                 <span className='icon'>
//                   <MilitaryTechSharpIcon />
//                 </span>
//                 <span className='desc-text'>超赞房东</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='card-right'>
//           <div className='right-list'>
//             <div className='card-right-item'>
//               <span className='item-title'>评价</span>
//               <div className='item-content'>
//                 <span className='item-num'>204</span>
//                 <div className='item-text'>条</div>
//               </div>
//             </div>
//             <div className='card-right-item'>
//               <span className='item-title'>评分</span>
//               <div className='item-content'>
//                 <span className='item-num'>4.99</span>
//                 <div className='item-icon'>
//                   <StarOutlinedIcon />
//                 </div>
//               </div>
//             </div>
//             <div className='card-right-item'>
//               <span className='item-title'>出租经验</span>
//               <div className='item-content'>
//                 <span className='item-num'>8</span>
//                 <div className='item-text'>个月</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HostCardWrapper>
//   );
// });

// export default HostCard;
const HostCard = memo(() => {
  return (
    <HostCardWrapper>
      <div className='card-content'>
        <div className='card-left'>
          <div className='card-left-avatar'>
            <img
              src='https://a0.muscache.com/im/pictures/user/User-570274313/original/d7c84454-58ca-47a3-8436-75ecca56cb0e.jpeg?im_w=240&im_format=avif'
              alt=''
            />
          </div>
          <div className='card-left-info'>
            <div className='name'>Jubileee</div>
            <div className='desc'>
              <MilitaryTechSharpIcon />
              <span>超赞房东</span>
            </div>
          </div>
        </div>

        <div className='card-right'>
          <div className='right-list'>
            {/* 评价 */}
            <div className='card-right-item'>
              <div className='item-title'>评价</div>
              <div className='item-content'>
                <span className='item-num'>204</span>
                <span className='item-text'>条</span>
              </div>
            </div>

            {/* 评分 */}
            <div className='card-right-item'>
              <div className='item-title'>评分</div>
              <div className='item-content'>
                <span className='item-num'>4.99</span>
                <StarOutlinedIcon />
              </div>
            </div>

            {/* 出租经验 */}
            <div className='card-right-item'>
              <div className='item-title'>出租经验</div>
              <div className='item-content'>
                <span className='item-num'>8</span>
                <span className='item-text'>个月</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HostCardWrapper>
  );
});

export default HostCard;
