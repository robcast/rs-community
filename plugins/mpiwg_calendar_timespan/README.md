## Test form for calendar-date-picker

```
<semantic-form new-subject-template='http://www.example.com/id/{{UUID}}'
  fields='[
    {
      "id": "date",
      "label": "Date",
      "xsdDatatype": "xsd:date",
      "selectPattern": "SELECT ?value WHERE { $subject <test:label> ?value }",
      "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
    }]'>
  <mpiwg-calendardate-input for="date" calendar="islamic"></mpiwg-calendardate-input>
</semantic-form>
```
