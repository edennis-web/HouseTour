window.__PANOS = [
  { id: 'P01_Entrance', label: 'כניסה',        p: [0.80, -2.35] },
  { id: 'P02_Living',   label: 'סלון',         p: [-3.6, -2.65] },
  { id: 'P03_Kitchen',  label: 'מטבח',         p: [-2.8, -4.9] },
  { id: 'P04_Dining',   label: 'פינת אוכל',    p: [0.1, -0.8] },
  { id: 'P05_Hall',     label: 'מסדרון',       p: [0.0, 0.75] },
  { id: 'P06_Master',   label: 'חדר הורים',    p: [-2.4, 3.1] },
  { id: 'P07_Bath1',    label: 'מקלחת הורים',  p: [-3.6, 1.1] },
  { id: 'P08_Bedroom',  label: 'חדר שינה',     p: [0.4, 3.3] },
  { id: 'P09_Mamad',    label: 'ממ״ד',         p: [3.7, 2.5] },
  { id: 'P10_Bath2',    label: 'חדר רחצה',     p: [3.85, -1.3] },
  { id: 'P11_Balcony',  label: 'מרפסת',        p: [-6.1, -2.5] },
];
// links: target id, optional 'via' = where the marker sits (a doorway) when the target is behind a wall
window.__LINKS = {
  P01_Entrance: [{ to: 'P02_Living' }, { to: 'P04_Dining' }, { to: 'P05_Hall' }, { to: 'P11_Balcony' }],
  P02_Living:   [{ to: 'P01_Entrance' }, { to: 'P03_Kitchen' }, { to: 'P04_Dining' }, { to: 'P11_Balcony' }],
  P03_Kitchen:  [{ to: 'P02_Living' }, { to: 'P04_Dining' }, { to: 'P05_Hall' }],
  P04_Dining:   [{ to: 'P01_Entrance' }, { to: 'P02_Living' }, { to: 'P03_Kitchen' }, { to: 'P05_Hall' }, { to: 'P11_Balcony' }, { to: 'P10_Bath2', via: [3.55, -0.75] }],
  P05_Hall:     [{ to: 'P01_Entrance' }, { to: 'P03_Kitchen' }, { to: 'P04_Dining' }, { to: 'P06_Master', via: [-1.06, 1.85] }, { to: 'P08_Bedroom', via: [0.83, 1.5] }, { to: 'P09_Mamad', via: [3.95, 1.69] }, { to: 'P10_Bath2', via: [3.55, -0.75] }],
  P06_Master:   [{ to: 'P05_Hall', via: [-1.06, 2.15] }, { to: 'P07_Bath1', via: [-2.95, 1.75] }],
  P07_Bath1:    [{ to: 'P06_Master', via: [-2.95, 1.75] }],
  P08_Bedroom:  [{ to: 'P05_Hall', via: [0.83, 1.2] }],
  P09_Mamad:    [{ to: 'P05_Hall', via: [4.1, 1.5] }],
  P10_Bath2:    [{ to: 'P05_Hall', via: [3.55, -0.75] }, { to: 'P04_Dining', via: [3.55, -0.75] }],
  P11_Balcony:  [{ to: 'P02_Living' }, { to: 'P01_Entrance' }, { to: 'P04_Dining' }],
};
