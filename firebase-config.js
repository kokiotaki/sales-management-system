// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPAFs5hVHNgG9X5z9enzspidT1ZwJJ9-A",
  authDomain: "uriagehoukoku-7f691.firebaseapp.com",
  projectId: "uriagehoukoku-7f691",
  databaseURL: "https://uriagehoukoku-7f691-default-rtdb.firebaseio.com/",
  storageBucket: "uriagehoukoku-7f691.appspot.com",
  messagingSenderId: "343060704167",
  appId: "1:343060704167:web:1aa32a7a64b485cab02482",
  measurementId: "G-7LDF9CLPWV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Firebase database helper functions
const FirebaseHelper = {
  // Save sales data
  saveSalesData: async function(data) {
    try {
      await database.ref('salesData').set(data);
      console.log('Sales data saved to Firebase');
    } catch (error) {
      console.error('Error saving sales data:', error);
      throw error;
    }
  },

  // Load sales data
  loadSalesData: async function() {
    try {
      const snapshot = await database.ref('salesData').once('value');
      return snapshot.val() || [];
    } catch (error) {
      console.error('Error loading sales data:', error);
      return [];
    }
  },

  // Save edit history
  saveEditHistory: async function(data) {
    try {
      await database.ref('editHistory').set(data);
      console.log('Edit history saved to Firebase');
    } catch (error) {
      console.error('Error saving edit history:', error);
      throw error;
    }
  },

  // Load edit history
  loadEditHistory: async function() {
    try {
      const snapshot = await database.ref('editHistory').once('value');
      return snapshot.val() || [];
    } catch (error) {
      console.error('Error loading edit history:', error);
      return [];
    }
  },

  // Save store data
  saveStoreData: async function(data) {
    try {
      await database.ref('storeData').set(data);
      console.log('Store data saved to Firebase');
    } catch (error) {
      console.error('Error saving store data:', error);
      throw error;
    }
  },

  // Load store data
  loadStoreData: async function() {
    try {
      const snapshot = await database.ref('storeData').once('value');
      return snapshot.val() || {};
    } catch (error) {
      console.error('Error loading store data:', error);
      return {};
    }
  },

  // Save budget data
  saveBudgetData: async function(data) {
    try {
      await database.ref('budgetData').set(data);
      console.log('Budget data saved to Firebase');
    } catch (error) {
      console.error('Error saving budget data:', error);
      throw error;
    }
  },

  // Load budget data
  loadBudgetData: async function() {
    try {
      const snapshot = await database.ref('budgetData').once('value');
      return snapshot.val() || {};
    } catch (error) {
      console.error('Error loading budget data:', error);
      return {};
    }
  },

  // Save closed days data
  saveClosedDaysData: async function(data) {
    try {
      await database.ref('closedDaysData').set(data);
      console.log('Closed days data saved to Firebase');
    } catch (error) {
      console.error('Error saving closed days data:', error);
      throw error;
    }
  },

  // Load closed days data
  loadClosedDaysData: async function() {
    try {
      const snapshot = await database.ref('closedDaysData').once('value');
      return snapshot.val() || {};
    } catch (error) {
      console.error('Error loading closed days data:', error);
      return {};
    }
  },

  // Save stores list
  saveStores: async function(data) {
    try {
      await database.ref('stores').set(data);
      console.log('Stores list saved to Firebase');
    } catch (error) {
      console.error('Error saving stores:', error);
      throw error;
    }
  },

  // Load stores list
  loadStores: async function() {
    try {
      const snapshot = await database.ref('stores').once('value');
      return snapshot.val() || [];
    } catch (error) {
      console.error('Error loading stores:', error);
      return [];
    }
  },

  // Clear all data
  clearAllData: async function() {
    try {
      await database.ref().remove();
      console.log('All data cleared from Firebase');
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  },

  // Listen for real-time updates
  onSalesDataChanged: function(callback) {
    database.ref('salesData').on('value', (snapshot) => {
      callback(snapshot.val() || []);
    });
  },

  // Stop listening for updates
  offSalesDataChanged: function() {
    database.ref('salesData').off();
  }
};