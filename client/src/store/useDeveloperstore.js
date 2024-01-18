import {create} from 'zustand';

const useDeveloperStore = create((set) => ({
  developers: [{
    id:1,
    fullName:"Tulsi Lukhi",
    email:"lukhitulshi99094@gmail.com",
    password:"Tulsi#1234",
    developerRole : 'Full-stack Developer',
    programmingLanguages : 'JavaScript',
    communicationChannels:'Slack',
    availibilities:'9am to 6pm'
  }],

  addDeveloper: (dev) => set((state) => ({ developers: [...state.developers, dev] })),
  updateDeveloper: (devId, updatedFields) => {
    set((state) => ({
      developers: state.developers.map((dev) =>
        dev.id === devId ? { ...dev, ...updatedFields } : dev
      ),
    }));
  },

  deleteDeveloper: (devId) => set((state) => ({ developers: state.developers.filter((dev) => dev.id !== devId) })),
}));

export default useDeveloperStore;
