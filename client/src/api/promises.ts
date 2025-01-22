const api = {
  expenses: {
    get: {
      async total() {
        const response = await fetch("/api/expenses/total");
        if (!response.ok) {
          throw new Error("Failed to fetch total");
        }
        return response.json();
      }
    }
  }
}

export const expenses =  {
  get: {
    total: api.expenses.get.total()
  }
}