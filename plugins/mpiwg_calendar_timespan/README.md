## Test form for mpiwg-calendardate-input

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

## Test form for mpiwg-composite-timespan-input

```
<semantic-form new-subject-template='http://www.example.com/id/{{UUID}}'  
  fields='[{
      "id": "date",
      "label": "Complex date",
      "xsdDatatype": "xsd:anyUri",
      "selectPattern": "SELECT ?value WHERE { $subject <test:label> ?value }",
      "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
    }]'>
  <mpiwg-composite-timespan-input for="date"
    new-subject-template="/date"
    date-label-format="YYYY MMMM D"
    fields='[{
        "id": "date_label",
        "label": "Label",
        "xsdDatatype": "xsd:string",
        "selectPattern": "SELECT ?value WHERE { $subject <test:label> ?value }",
        "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
      }, {
        "id": "date_type",
        "label": "Type",
        "xsdDatatype": "xsd:anyURI",
        "selectPattern": "SELECT DISTINCT ?value ?label WHERE { VALUES (?value ?label) { (<test:day> \"day\") (<test:year> \"year\") (<test:range> \"range\") }}",
        "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
      }, {
        "id": "date_calendar",
        "label": "Calendar",
        "xsdDatatype": "xsd:anyURI",
        "selectPattern": "SELECT DISTINCT ?value ?label WHERE { VALUES (?value ?label) { (<test:gregorian> \"gregorian\") (<test:islamic> \"islamic\") (<test:persian> \"persian\") }}",
        "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
      }, {
        "id": "date_day",
        "label": "Date",
        "xsdDatatype": "xsd:date",
        "selectPattern": "SELECT ?value WHERE { $subject <test:label> ?value }",
        "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
      }, {
        "id": "date_from",
        "label": "Start date",
        "xsdDatatype": "xsd:date",
        "selectPattern": "SELECT ?value WHERE { $subject <test:label> ?value }",
        "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
      }, {
        "id": "date_until",
        "label": "End date",
        "xsdDatatype": "xsd:date",
        "selectPattern": "SELECT ?value WHERE { $subject <test:label> ?value }",
        "insertPattern": "INSERT { $subject <test:label> ?value } WHERE {}"
      }]'>
    <semantic-form-text-input for="label"></semantic-form-text-input>
    <semantic-form-select-input for="type"></semantic-form-select-input>
    <semantic-form-select-input for="calendar"></semantic-form-select-input>
    <mpiwg-calendardate-input for="date_day"></mpiwg-calendardate-input>
    <mpiwg-calendardate-input for="date_from" yearstart="true"></mpiwg-calendardate-input>
    <mpiwg-calendardate-input for="date_until" yearend="true"></mpiwg-calendardate-input>
    <mpiwg-text-input for="notes"></semantic-form-text-input>
  </mpiwg-composite-timespan-input>
</semantic-form>
```
