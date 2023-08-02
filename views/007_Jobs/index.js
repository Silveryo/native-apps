import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { jobs } from './data';
import styles from './styles';

const JobListingView = () => {
  return (
    <ScrollView style={styles.container}>
      {jobs.map((job) => (
        <View key={job.id} style={styles.jobCard}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobCompany}>{job.company}</Text>
          <Text style={styles.jobLocation}>{job.location}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default JobListingView;
