
export const STORAGE = {
  users: "findit_users",
  items: "findit_items",
  currentUser: "findit_current_user"
};

export const starterItems = [
  {
    id: "sample-1",
    title: "Black Wireless Earbuds",
    type: "Lost",
    category: "Electronics",
    location: "Central Library",
    date: "2026-10-28",
    description:
      "Black wireless earbuds lost near the library entrance.",
    image: "",
    contact: "student@example.com",
    ownerId: "sample",
    status: "Approved",
    createdAt: Date.now()
  },
  {
    id: "sample-2",
    title: "Blue Water Bottle",
    type: "Found",
    category: "Accessories",
    location: "CSE Block",
    date: "2026-10-30",
    description:
      "Blue water bottle found outside the CSE laboratory.",
    image: "",
    contact: "helpdesk@example.com",
    ownerId: "sample",
    status: "Approved",
    createdAt: Date.now()
  },
  {
    id: "sample-3",
    title: "Engineering Mathematics Book",
    type: "Lost",
    category: "Books & Notes",
    location: "Seminar Hall",
    date: "2026-11-01",
    description:
      "Mathematics textbook with handwritten notes.",
    image: "",
    contact: "student2@example.com",
    ownerId: "sample",
    status: "Approved",
    createdAt: Date.now()
  }
];

export function readItems() {
  try {
    const saved = localStorage.getItem(STORAGE.items);

    if (saved !== null) {
      return JSON.parse(saved);
    }

    localStorage.setItem(
      STORAGE.items,
      JSON.stringify(starterItems)
    );

    return starterItems;

  } catch (error) {
    console.error("Unable to load items:", error);
    return starterItems;
  }
}

export function saveItems(items) {
  localStorage.setItem(
    STORAGE.items,
    JSON.stringify(items)
  );
}
