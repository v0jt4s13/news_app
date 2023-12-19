// components/FormPage/FormPage.js
import React, { useState, useEffect } from 'react';

function FormPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formFields, setFormFields] = useState([]);
  const [adsFormFields, getAdsFormFields] = useState([]);

  useEffect(() => {
    fetch('/json_static/categories.json')
      .then(response => response.json())
      .then(data => {
        console.log("Dane z pliku", data)
        setCategories(data)
      })
      .catch(error => console.error("Fetching categories failed:", error));
  }, []);

  useEffect(() => {
    fetch('/json_static/forms-fields.json')
      .then(response => response.json())
      .then(data => {
        console.log("Dane z pliku", data)
        getAdsFormFields(data)
      })
      .catch(error => console.error("Fetching categories failed:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      let category_file_name = "form-fields-" + selectedCategory.toLowerCase() + ".json";
      console.log("Nazwa pliku category", category_file_name)
      fetch(`/json_static/${category_file_name}`)
        .then(response => response.json())
        .then(data => {
          console.log("Dane z pliku categories", data)
          setFormFields(data)
        })
        .catch(error => console.error(`Fetching ${selectedCategory.toLowerCase()} form failed:`, error));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const renderFormField = (field) => {
    const isFieldAvailable =
      selectedCategory &&
      field.ExistIn &&
      Object.prototype.hasOwnProperty.call(field.ExistIn, selectedCategory.toLowerCase()) &&
      field.ExistIn[selectedCategory.toLowerCase()];
  
    if (!isFieldAvailable) {
      // Jeśli pole nie jest dostępne w wybranej kategorii, nie renderuj go
      return null;
    }
  
    // Dodaj unikalne klasy dla każdego pola
    const commonClass = 'commonClass';
    let fieldClasses = commonClass;
  
    // Dodaj klasy w zależności od typu pola
    if (field.type === 'text') {
      fieldClasses += ' fci';
    } else if (field.type === 'select') {
      fieldClasses += ' fci';
    } else if (field.type === 'textarea') {
      fieldClasses += ' fci field-type-textarea';
    } else if (field.type === 'button') {
      fieldClasses += ' btn';
    }
  
    // Renderowanie pola formularza w zależności od typu
    if (field.type === 'select' && field.options) {
      return (
        <select
          key={field.id}
          id={field.name}
          name={field.name}
          required={field.required || false}
          className={fieldClasses}
        >
          <option value="" disabled defaultValue>
            Wybierz {field.label.toLowerCase()}
          </option>
          {field.options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    } else if (field.type === 'textarea') {
      return (
        <textarea
          key={field.id}
          id={field.name}
          name={field.name}
          required={field.required || false}
          className={fieldClasses}
        />
      );
    } else {
      return (
        <input
          key={field.id}
          type={field.type}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder || ''}
          required={field.required || false}
          className={fieldClasses}
        />
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    // Dodaj tutaj logikę przesyłania danych na serwer lub zapisu do pliku JSON
  };

  const sprawdzWarunek = (klucz) => {
    return adsFormFields[0]?.ExistIn[klucz?.toLowerCase()] || false;
  };

  return (
    <div className="FormPage" className='jd-form jd-form-cf'>
      <h2>Formularz Ogłoszenia</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Kategoria:</label>
        <select id="category" name="category" onChange={handleCategoryChange} required className='jd-form jd-form-cf'>
          <option value="" disabled selected hidden>
            Wybierz kategorię
          </option>
          {categories.map(category => (
            <option key={category.id} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        {selectedCategory && (
          <div>
            <h3>{`${selectedCategory} - Formularz Ogłoszenia`}</h3>
            {adsFormFields.map(field => (
              <div key={field.ID}>
                {/* Usunięcie acs.subsite z przodu pełnej nazwy */}
                <label htmlFor={field.Field}>{field.Title.replace('acs-subsite.', '').replace(/_/g, ' ').replace('Form', '')}:</label>
                {/* Sprawdzenie typu pola i dostosowanie wyświetlania */}
                {field.Type[1] === 'chaeckbox' || field.Type[1] === 'checkbox' ? (
                  <input type="checkbox" id={field.Field} name={field.Field} />
                ) : field.Type[1] === 'select' ? (
                  <select id={field.Field} name={field.Field}>
                    {/* Dodaj tutaj opcje dla selecta */}
                  </select>
                ) : (
                  <input
                    type="text"
                    id={field.Field}
                    name={field.Field}
                    placeholder={`Wprowadź ${field.Title.replace('acs-subsite.', '').replace(/_/g, ' ')}`}
                    required={field.Req === 't'}
                  />
                )}
                {/* reszta kodu */}
              </div>
            ))}
            <button type="submit">Dodaj ogłoszenie</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormPage;
