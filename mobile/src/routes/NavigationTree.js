import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Auth from '../screens/Login/Auth';
import Home from '../screens/Home/Home';
import Camera from '../screens/Home/Camera';
import Messenger from '../screens/Home/Messenger/Messenger';
import Chat from '../screens/Home/Messenger/Chat';
import Profile from '../screens/Home/Profile/Profile';
import Settings from '../screens/Home/Profile/Settings/Settings';
import AppTheme from '../screens/Home/Profile/Settings/AppTheme';
import Login from '../screens/Login/LoginContainer';
import ResetPassword from '../screens/Login/ResetPassword';
import Share from '../screens/Home/Share';
import HomeComments from '../screens/Home/HomeComments';
import ForwardMessages from '../screens/Home/Messenger/ForwardMessages';
import Group from '../screens/Home/Messenger/Group';
import GroupChat from '../screens/Home/Messenger/GroupChat';
import PrivateMessage from '../screens/Home/Messenger/PrivateMessage';
import Reactions from '../screens/Home/Messenger/Reactions';
import ReadBy from '../screens/Home/Messenger/ReadBy';
import SearchMessages from '../screens/Home/Messenger/SearchMessages';
import SearchPeople from '../screens/Home/Messenger/SearchPeople';
import Followers from '../screens/Home/Profile/Followers';
import StoryViews from '../screens/Home/Profile/StoryViews';
import Following from '../screens/Home/Profile/Following';
import NameEdit from '../screens/Home/Profile/Settings/NameEdit';
import CaptionEdit from '../screens/Home/Profile/Settings/CaptionEdit';
import ChangeAccount from '../screens/Home/Profile/Settings/ChangeAccount';
import BlockedList from '../screens/Home/Profile/Settings/BlockedList';
import NewEmail from '../screens/Home/Profile/Settings/NewEmail';
import NewPassword from '../screens/Home/Profile/Settings/NewPassword';
import VerifyNewPassword from '../screens/Home/Profile/Settings/VerifyNewPassword';
import NotificationSettings from '../screens/Home/Profile/Settings/NotificationSettings/NotificationSettings';
import NotificationRequests from '../screens/Home/Profile/Settings/NotificationSettings/NotificationRequests';
import NotificationComments from '../screens/Home/Profile/Settings/NotificationSettings/NotificationComments';
import NotificationShares from '../screens/Home/Profile/Settings/NotificationSettings/NotificationShares';
import NotificationSaves from '../screens/Home/Profile/Settings/NotificationSettings/NotificationSaves';
import NotificationsPreview from '../screens/Home/Profile/Settings/NotificationSettings/NotificationsPreview';

const AuthStack = createStackNavigator(
  {Login, Auth, ResetPassword},
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const HomeStack = createStackNavigator(
  {
    Home,
    Profile,
    Followers,
    Following,
    StoryViews,
    ResetPassword,
    HomeComments,
    Share,
    Camera,
    Messenger,
    Chat,
    ForwardMessages,
    Group,
    GroupChat,
    PrivateMessage,
    Reactions,
    ReadBy,
    SearchPeople,
    SearchMessages,
    Settings,
    NameEdit,
    CaptionEdit,
    ChangeAccount,
    BlockedList,
    NewEmail,
    NewPassword,
    AppTheme,
    VerifyNewPassword,
    NotificationSettings,
    NotificationRequests,
    NotificationComments,
    NotificationShares,
    NotificationSaves,
    NotificationsPreview,
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Home',
  },
);

const AppStack = (isLoggedIn) =>
  createSwitchNavigator(
    {
      Login: AuthStack,
      Home: HomeStack,
    },
    {
      backBehavior: 'initialRoute',
      initialRouteName: isLoggedIn ? 'Login' : 'Home',
    },
  );

export default createRootNavigation = (isLoggedIn) =>
  createAppContainer(AppStack(isLoggedIn));
