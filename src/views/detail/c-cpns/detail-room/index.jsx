import { memo, useState } from 'react';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import SportsGymnasticsOutlinedIcon from '@mui/icons-material/SportsGymnasticsOutlined';

import { DetailRoomWapper } from './style';
import IconStar from '@/assets/svg/icon_star';
import HostCard from '@/components/host-card';
import OrderCard from '../order-card';
import DatePicker from '@/base-ui/date-picker';

const DetailRoom = memo(({ detailInfo }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <DetailRoomWapper>
      <div className='room-left'>
        <div className='room-header'>
          <div className='room-location'>美国明尼苏达州明尼阿波利斯</div>
          <div className='room-about'>整套公寓·可住4人·1张双人床</div>
          <div className='room-rank'>
            <IconStar />
            <span>超赞房东</span>
            <span className='comment'>11条评价</span>
          </div>
        </div>
        <div className='room-host'>
          <div className='room-host-avatar'>
            <img
              src='https://a0.muscache.com/im/pictures/user/User-570274313/original/d7c84454-58ca-47a3-8436-75ecca56cb0e.jpeg?im_w=240&im_format=avif'
              alt=''
            />
          </div>
          <div className='room-host-info'>
            <div className='room-host-name'>房东：Jubilee</div>
            <div className='room-host-message'>超级英雄，房东</div>
          </div>
        </div>
        <div className='room-feature-list'>
          <div className='room-feature-item'>
            <div className='room-feature-item-icon'>
              <BedOutlinedIcon />
            </div>
            <div className='room-feature-item-content'>
              <div className='room-feature-item-title'>
                <h3>享受原汁原味的 90 年代住宿体验</h3>
              </div>
              <div className='room-feature-item-desc'>
                入住我门的宿舍，体验我超赞的卧室
              </div>
            </div>
          </div>
          <div className='room-feature-item'>
            <div className='room-feature-item'>
              <div className='room-feature-item-icon'>
                <AutoStoriesOutlinedIcon />
              </div>
              <div className='room-feature-item-content'>
                <div className='room-feature-item-title'>
                  <h3>沉浸于颠覆想象的 2D 世界</h3>
                </div>
                <div className='room-feature-item-desc'>
                  探索学院里的 100 多件《X 战警》珍稀道具。
                </div>
              </div>
            </div>
          </div>
          <div className='room-feature-item'>
            <div className='room-feature-item-icon'>
              <SportsMotorsportsOutlinedIcon />
            </div>
            <div className='room-feature-item-content'>
              <div className='room-feature-item-title'>
                <h3>戴上脑波强化机体验一下</h3>
              </div>
              <div className='room-feature-item-desc'>
                在战斗室里集合，让脑波强化机帮助你发掘自己的变种人力量。
              </div>
            </div>
          </div>
          <div className='room-feature-item'>
            <div className='room-feature-item'>
              <div className='room-feature-item-icon'>
                <SportsGymnasticsOutlinedIcon />
              </div>
              <div className='room-feature-item-content'>
                <div className='room-feature-item-title'>
                  <h3>在危境训练室里接受训练</h3>
                </div>
                <div className='room-feature-item-desc'>
                  在专业教练的指导下掌握变种人能力。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='room-desc-translate'>
          <div className='room-desc-translate-content'>
            <span>部分信息已自动翻译。</span>
            <button className='show-original'>显示原文</button>
          </div>
        </div>

        <div className='room-translated-info'>
          <span>
            <span className='translated-text'>
              召唤所有变种人！如果你觉得自己有点与众不同，也可以来。来到泽维尔天才青少年学院，你会发现自己有多么特别。我们已做好准备，迎接像你这样的变种人学员加入新班级。无论如何，准备好参加有史以来最酷的迎新会吧！
              <br />
              <br />
              <span className='translated-content-title'>体验内容</span>
              <br />
              X
              学院是你和其他变种人了解和掌控变种人天赋的绝佳场所。住宿期间的活动安排相当丰富，你将参与训练、进行超酷的实验、接收秘密任务简报、拍摄学员大合照等等！感到精疲力尽的时候，尽管到我的房间、金刚狼的房间或其他宿舍房间休息。
              <br />
              <br />
              期待我们的变种人来过夜！
              <br />
              <br />
              • 我会带领你完成新生入学流程（别担心，有趣的环节就在后头）。
              <br />
              <br />
              •
              进入野兽教授的实验室！这里就像是一个科学游乐场，你可以用变种能量药剂提升能力。
              <br />
              <br />
              •
              在危境训练室里上课，格斗教授会教你如何提升格斗技能，因为地狱火俱乐部随时会袭击！
              <br />
              <br />
              •
              前往战斗室试戴脑波强化机，找到你的变种超能力。也许你是像暴风女一样的欧米茄级变种人！
              <br />
              <br />
              •
              在你离开之前，我们将汇报总结一下你的新超能力，你可以获得正式文凭和班级合照。
              <br />
              <br />• 对了，还有用牌皇的秘方做的贝涅饼早餐，这可是我的最爱！
            </span>
          </span>
        </div>

        <div className='room-host-card'>
          <div className='card-title'>
            <h2>认识你的房东</h2>
          </div>
          <div className='card-content'>
            <HostCard />
          </div>
        </div>

        <div className='room-date-picker'>
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>

      <div className='room-right'>
        {/* 预定卡片 */}
        <OrderCard />
        {/* 提示信息 */}
        <div></div>
        {/* 举报房源 */}
        <div></div>
      </div>
    </DetailRoomWapper>
  );
});

export default DetailRoom;
