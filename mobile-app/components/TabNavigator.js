import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLOR_CONSTANTS } from './ColorConstants';
import { useUser } from '../contexts/UserContext';
import LoginTab from '../tabs/LoginTab';

export default function TabNavigator() {
  const { isLoggedIn, logout } = useUser();
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  // Handle successful login
  const handleLoginSuccess = () => {
    setActiveTab('home');
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    setActiveTab('home');
  };

  const renderTabContent = () => {
    // If not logged in, show login screen
    if (!isLoggedIn) {
      return <LoginTab onLoginSuccess={handleLoginSuccess} />;
    }

    // If logged in, show the selected tab content
    switch (activeTab) {
      case 'home':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Home</Text>
            <Text style={styles.tabDescription}>Welcome to your home page!</Text>
          </View>
        );
      case 'profile':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Profile</Text>
            <Text style={styles.tabDescription}>Manage your profile settings here.</Text>
            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabTitle}>Home</Text>
            <Text style={styles.tabDescription}>Welcome to your home page!</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tab Content */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>

      {/* Bottom Tab Bar - Only show when logged in */}
      {isLoggedIn && (
        <View style={styles.tabBar}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabButton,
                activeTab === tab.id && styles.activeTabButton
              ]}
              onPress={() => setActiveTab(tab.id)}
            >
              <Text style={styles.tabIcon}>{tab.icon}</Text>
              <Text style={[
                styles.tabLabel,
                activeTab === tab.id && styles.activeTabLabel
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_CONSTANTS.lincoln_financial_red,
    marginBottom: 10,
  },
  tabDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  activeTabButton: {
    backgroundColor: COLOR_CONSTANTS.lightest_gray,
    borderRadius: 8,
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  activeTabLabel: {
    color: COLOR_CONSTANTS.lincoln_financial_red,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
