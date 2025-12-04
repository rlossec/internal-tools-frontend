# JSON Server Backend

- **URL Base :** https://tt-jsonserver-01.alt-tools.tech/

## 📊 Main resources

```bash
GET /departments       # List of 5 departments
GET /users             # List of 66 users
GET /tools             # List of 24 SaaS tools
GET /user_tools        # User-tools relationships
GET /analytics         # KPIs, budget and dashboard metrics

```

## 🔍 Filtering and search

```bash
# Filter active users
GET /users?active=true

# Tools by status
GET /tools?status=active
GET /tools?status=unused
GET /tools?status=expiring

# Users by department
GET /users?department_id=1

# Search by name
GET /users?name_like=John
GET /tools?name_like=Slack

```

### 🎯 DASHBOARD SPECIAL ENDPOINTS

```bash
# Recent Tools (8 last updated tools)
GET /tools?_sort=updated_at&_order=desc&_limit=8

# Tools by descending cost
GET /tools?_sort=monthly_cost&_order=desc

# Complete budget analytics
GET /analytics

```

### 📈 Relations and joins

```bash
# Users with their department
GET /users?_embed=department

# Tools with relationships
GET /tools?_embed=user_tools

# User relationships
GET /users/1/user_tools

```

### 🔄 Pagination and sorting

```bash
# Page 1, 10 items
GET /users?_page=1&_limit=10

# Sort by name
GET /tools?_sort=name&_order=asc

# Sort by cost
GET /tools?_sort=monthly_cost&_order=desc

```
