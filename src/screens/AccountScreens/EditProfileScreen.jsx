import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import Pencil from '../../Icons/Pencil.svg';
import ShieldCheck from '../../Icons/ShieldCheck.svg';
import { accountStyles as styles } from '../../Styles/styles';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <CustomHeader title="Edit Profile" onBackPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Profile Image Section */}
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <View style={{ position: 'relative' }}>
            <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#FFFFFF' }}>
              <Text style={{ fontSize: 40, color: '#9CA3AF', fontFamily: 'Inter_18pt-Bold' }}>JD</Text>
            </View>
            <TouchableOpacity 
              style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#059669', width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#FFFFFF' }}
            >
              <Pencil width={16} height={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 12, fontSize: 14, color: '#059669', fontFamily: 'Inter_18pt-Bold' }}>Change Photo</Text>
        </View>

        {/* Input Fields */}
        <View style={{ gap: 20 }}>
          <View>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 8 }}>Full Name</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, padding: 12, fontSize: 16, color: '#111827', fontFamily: 'Inter_18pt-SemiBold' }}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 8 }}>Email Address</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, padding: 12, fontSize: 16, color: '#111827', backgroundColor: '#F9FAFB', fontFamily: 'Inter_18pt-SemiBold' }}
              value={email}
              editable={false}
            />
            <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4, fontFamily: 'Inter_18pt-Medium' }}>Email cannot be changed</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14, fontFamily: 'Inter_18pt-Bold', color: '#374151', marginBottom: 8 }}>Phone Number</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 12, backgroundColor: '#F9FAFB' }}>
              <TextInput
                style={{ flex: 1, height: 50, fontSize: 16, color: '#111827', fontFamily: 'Inter_18pt-SemiBold' }}
                value={phone}
                editable={false}
              />
              <ShieldCheck width={18} height={18} color="#059669" />
            </View>
            <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 4, fontFamily: 'Inter_18pt-Medium' }}>Verified Number</Text>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          style={{ backgroundColor: '#059669', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 40 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Inter_18pt-Bold' }}>Save Changes</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
