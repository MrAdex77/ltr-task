import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { connectSocket, joinLobbyChannel } from '../../services/socket';
import { AnnouncementPayload } from '../../types/common';

const HomeScreen: React.FC = () => {
  const { token, user } = useAuth();
  const [announcement, setAnnouncement] = useState<AnnouncementPayload | null>(null);

  useEffect(() => {
    if (token) {
      const socket = connectSocket(token);
      joinLobbyChannel(socket, msg => {
        setAnnouncement(msg);
      });
      return () => {
        if (socket) {
          socket.disconnect();
        }
      };
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome, {user?.email || 'Guest'}!</Text>
      <Text style={styles.label}>ANNOUNCEMENT:</Text>
      {announcement ? (
        <View>
          <Text style={styles.message}>{announcement.message}</Text>
          <Text style={styles.numbers}>{announcement.numbers.join(', ')}</Text>
        </View>
      ) : (
        <Text>No announcement yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: { fontWeight: 'bold', marginBottom: 10, fontSize: 18 },
  message: { fontSize: 16, marginBottom: 8 },
  numbers: { fontSize: 16, fontWeight: '600' },
});

export default HomeScreen;
