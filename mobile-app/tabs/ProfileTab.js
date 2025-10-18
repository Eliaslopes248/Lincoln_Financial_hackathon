import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_CONSTANTS } from '../components/ColorConstants';

export default function ProfileTab() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.nameText}>{profileData.name}</Text>
          <Text style={styles.emailText}>{profileData.email}</Text>
        </View>

        {/* Profile Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Profile Information</Text>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={handleEdit}
            >
              <Text style={styles.editButtonText}>
                {isEditing ? 'Cancel' : 'Edit'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Full Name</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={profileData.name}
                  onChangeText={(text) => handleInputChange('name', text)}
                />
              ) : (
                <Text style={styles.infoValue}>{profileData.name}</Text>
              )}
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={profileData.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  keyboardType="email-address"
                />
              ) : (
                <Text style={styles.infoValue}>{profileData.email}</Text>
              )}
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={profileData.phone}
                  onChangeText={(text) => handleInputChange('phone', text)}
                  keyboardType="phone-pad"
                />
              ) : (
                <Text style={styles.infoValue}>{profileData.phone}</Text>
              )}
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Address</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={profileData.address}
                  onChangeText={(text) => handleInputChange('address', text)}
                  multiline
                />
              ) : (
                <Text style={styles.infoValue}>{profileData.address}</Text>
              )}
            </View>
          </View>

          {isEditing && (
            <TouchableOpacity 
              style={styles.saveButton}
              onPress={handleSave}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsCard}>
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Notifications</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Privacy</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Security</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Help & Support</Text>
              <Text style={styles.settingArrow}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLOR_CONSTANTS.lincoln_financial_red,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  emailText: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLOR_CONSTANTS.lincoln_financial_red,
    borderRadius: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoRow: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  infoInput: {
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: COLOR_CONSTANTS.lincoln_financial_red,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  settingArrow: {
    fontSize: 20,
    color: '#ccc',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
