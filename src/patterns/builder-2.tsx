class QueryBuilder {
  private table: string = '';
  private whereParams: string[] = [];
  private orderBy: string = '';

  from(table: string): QueryBuilder {
    this.table = table;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.whereParams.push(condition);
    return this;
  }

  order(condition: string): QueryBuilder {
    this.orderBy = condition;
    return this;
  }

  build(): DatabaseQuery {
    return new DatabaseQuery(this.table, this.whereParams, this.orderBy);
  }
}

class DatabaseQuery {
  constructor(
    private table: string,
    private whereParams: string[],
    private orderBy: string,
  ) {}

  query(): void {
    let query = `SELECT * FROM ${this.table}`;

    if (this.whereParams.length) {
      query += ` WHERE ${this.whereParams.join(' AND ')}`;
    }

    if (this.orderBy) {
      query += ` ORDER BY ${this.orderBy}`;
    }

    // Тут ми виконуємо запит до бази даних, наразі лише виводимо текст запиту.
    console.log(`Executing query: ${query}`);
  }
}

// Використання
const builder2 = new QueryBuilder();
const dbQuery = builder2
  .from('Users')
  .where('age > 21')
  .where('status = "active"')
  .order('lastName')
  .build();

dbQuery.query(); // Executing query: SELECT * FROM Users WHERE age > 21 AND status = "active" ORDER BY lastName
