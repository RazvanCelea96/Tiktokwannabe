import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Camera from '../screens/Home/Camera';
import Messenger from '../screens/Home/Messenger/Messenger';
import Chat from '../screens/Home/Messenger/Chat';
import Profile from '../screens/Home/Profile/Profile';
import Settings from '../screens/Home/Profile/Settings/Settings';
import Login from '../screens/SigningIn/Login';
import SignUp from '../screens/SigningIn/SignUp';
import ResetPassword from '../screens/SigningIn/ResetPassword';
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

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="StoryViews" component={StoryViews} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="HomeComments" component={HomeComments} />
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Messenger" component={Messenger} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ForwardMessage" component={ForwardMessages} />
      <Stack.Screen name="Groups" component={Group} />
      <Stack.Screen name="GroupChat" component={GroupChat} />
      <Stack.Screen name="PrivateMessage" component={PrivateMessage} />
      <Stack.Screen name="Reactions" component={Reactions} />
      <Stack.Screen name="ReadBy" component={ReadBy} />
      <Stack.Screen name="SearchPeople" component={SearchPeople} />
      <Stack.Screen name="SearchMessages" component={SearchMessages} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="NameChange" component={NameEdit} />
      <Stack.Screen name="CaptionEdit" component={CaptionEdit} />
      <Stack.Screen name="ChangeAccount" component={ChangeAccount} />
      <Stack.Screen name="BlockList" component={BlockedList} />
      <Stack.Screen name="NewEmail" component={NewEmail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="VerifyPassword" component={VerifyNewPassword} />
      <Stack.Screen name="Notifications" component={NotificationSettings} />
      <Stack.Screen
        name="NotificationsRequestsSettings"
        component={NotificationRequests}
      />
      <Stack.Screen
        name="NotificationsCommentsSettings"
        component={NotificationComments}
      />
      <Stack.Screen
        name="NotificationsSharesSettings"
        component={NotificationShares}
      />
      <Stack.Screen
        name="NotificationsSavesSettings"
        component={NotificationSaves}
      />
      <Stack.Screen name="PreviewSettings" component={NotificationsPreview} />
    </Stack.Navigator>
  );
}

export default Navigation;
