// Product listings and detail specifications imported from the customer-maintained workbook.
const importedCatalogProducts = [
  {
    "id": "disposable-petri-dish",
    "category": "General Plasticware",
    "application": "Petri Dishes",
    "name": "Disposable Petri Dish",
    "types": [
      "Round Petri Dishes — Undivided",
      "Round Petri Dishes — 2 compartments",
      "Round Petri Dishes — 3 compartments",
      "Round Petri Dishes — 4 compartments",
      "Square Petri Dishes"
    ],
    "description": "Sterile PS petri dishes for microbiology, cell culture, CRO labs & high-throughput screening. Vented lid, divided & grid options available, OEM bulk supply.",
    "image": "../assets/catalog-products/catalog-e40477e3a36d.png"
  },
  {
    "id": "disposable-sterile-plastic-inoculating-loops",
    "category": "General Plasticware",
    "application": "Spreader",
    "name": "Disposable Sterile Plastic Inoculating Loops",
    "types": [
      "Nickel-Chromium Alloy Inoculating Loops",
      "Polystyrene Inoculating Loops"
    ],
    "description": "Inoculating loops are widely used laboratory consumables in life science research, commonly utilized for microbiological testing, cellular microbiology, molecular biology and a range of other laboratory applications.",
    "image": "../assets/catalog-products/catalog-a711c72d8c13.png"
  },
  {
    "id": "disposable-sterile-cell-spreader",
    "category": "General Plasticware",
    "application": "Spreader",
    "name": "Disposable Sterile Cell Spreader / Plate Spreader",
    "types": [
      "Cell Spreader"
    ],
    "description": "Sterile plastic plate spreaders for spreading bacterial suspension on agar plates, ideal for food safety, water testing and CRO microbiology laboratories, no flaming required.",
    "image": "../assets/catalog-products/catalog-7af7cd8d42eb.png"
  },
  {
    "id": "stomacher-bag",
    "category": "General Plasticware",
    "application": "Bags",
    "name": "Stomacher Bag",
    "types": [
      "With press-seal strip",
      "Stand-up bag with press-seal strip"
    ],
    "description": "Sterile homogenizing stomacher bags 80ml / 400ml / 3500ml, filter blender bags separate solid residues automatically, ideal for food safety testing, CRO microbiology lab.",
    "image": "../assets/catalog-products/catalog-0d0f29eae8cd.png"
  },
  {
    "id": "conical-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "Conical Tubes",
    "types": [
      "Snap cap",
      "Screw cap"
    ],
    "description": "Sterile PP centrifuge tubes, 1.5ml,15ml,50ml, screw cap & snap cap, RNase DNase free for microbiology testing, molecular biology and CRO laboratories.",
    "image": "../assets/catalog-products/catalog-dc352321b5b8.png"
  },
  {
    "id": "serological-pipette",
    "category": "General Plasticware",
    "application": "Serological Pipettes",
    "name": "Serological Pipette",
    "types": [],
    "description": "Disposable polystyrene serological pipettes with cotton plug & color code, RNase DNase free, ideal for cell culture, media preparation and CRO laboratory liquid handling.",
    "image": "../assets/catalog-products/catalog-bdf2266abdd3.png"
  },
  {
    "id": "transfer-pipette",
    "category": "General Plasticware",
    "application": "Transfer Pipettes",
    "name": "Transfer Pipette",
    "types": [],
    "description": "Sterile plastic transfer pipettes with integrated bulb, graduated optional, easy liquid transfer for food testing, CRO, microbiology and cell culture labs.",
    "image": "../assets/catalog-products/catalog-d63f38f8ea96.png"
  },
  {
    "id": "transfer-pipette",
    "category": "Liquid Handling Consumables",
    "application": "Transfer Pipettes",
    "name": "Transfer Pipette",
    "types": [],
    "description": "Sterile plastic transfer pipettes with integrated bulb, graduated optional, easy liquid transfer for food testing, CRO, microbiology and cell culture labs.",
    "image": "../assets/catalog-products/catalog-d63f38f8ea96.png"
  },
  {
    "id": "plastic-test-tubes",
    "category": "General Plasticware",
    "application": "Test Tubes",
    "name": "Plastic Test Tubes",
    "types": [],
    "description": "Sterile round bottom plastic test tubes 12×75mm,13×100mm,16×100mm, ideal for microbial culture, biochemical test and CRO laboratories.",
    "image": "../assets/catalog-products/catalog-174946bbf9d0.png"
  },
  {
    "id": "mixed-cellulose-esters-cn-ca",
    "category": "General Plasticware",
    "application": "Filter Paper",
    "name": "Mixed Cellulose Esters, CN-CA",
    "types": [],
    "description": "Sterile gridded MCE membrane filters 0.22 μm and 0.45 μm, reusable autoclavable plastic filter funnels for membrane filtration, water quality and beverage microbial testing.",
    "image": "../assets/catalog-products/catalog-6ec82f0b6ac0.png"
  },
  {
    "id": "96well-384well-pcr-qpcr-plate",
    "category": "General Plasticware",
    "application": "PCR Plates",
    "name": "96well/384well PCR/QPCR Plate",
    "types": [
      "PCR Plates",
      "QPCR Plates"
    ],
    "description": "RNase DNase free polypropylene PCR plates, clear & white options, compatible with thermal cyclers, ideal for molecular biology, CRO and AIDD high-throughput screening.",
    "image": "../assets/catalog-products/catalog-10bb5317188d.png"
  },
  {
    "id": "8-strip-pcr-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "8-Strip PCR Tubes",
    "types": [],
    "description": "RNase DNase free 8 tube PCR strips, clear & white available, compatible with thermal cyclers, ideal for molecular lab and CRO qPCR testing.",
    "image": "../assets/catalog-products/catalog-105b381863d1.png"
  },
  {
    "id": "cryovial-cryogenic-vial-cryo-tube",
    "category": "General Plasticware",
    "application": "Cryovials",
    "name": "Cryovial / Cryogenic Vial / Cryo Tube",
    "types": [
      "Short-Cap Cryovials",
      "Outer-Rotating Cap Cryovials",
      "High-Cap Cryovials",
      "External- and Internal-Rotation Cryovials",
      "Stand-Up Round-Bottom Cryovials"
    ],
    "description": "RNase DNase free PP cryo tubes with silicone gasket, self-standing option, ideal for cell preservation, strain banking, CRO and biobank sample storage.",
    "image": "../assets/catalog-products/catalog-60fbd5da37da.png"
  },
  {
    "id": "cover-glass-microscope-slide",
    "category": "Anatomy, Pathology & Clinical Supplies",
    "application": "Microscope Slides",
    "name": "Cover Glass & Microscope Slide",
    "types": [
      "Square Cover Glass",
      "Rectangular Cover Glass",
      "Microscope Slides"
    ],
    "description": "Optical glass microscope slides and coverslips, pre-cleaned, frosted & positively charged options, ideal for microbial staining, IHC, fluorescence microscopy and CRO labs.",
    "image": "../assets/catalog-products/catalog-6149dad76d09.png"
  },
  {
    "id": "cover-glass-microscope-slide",
    "category": "Anatomy, Pathology & Clinical Supplies",
    "application": "Cover Glass and Slides",
    "name": "Cover Glass & Microscope Slide",
    "types": [
      "Square Cover Glass",
      "Rectangular Cover Glass",
      "Microscope Slides"
    ],
    "description": "Optical glass microscope slides and coverslips, pre-cleaned, frosted & positively charged options, ideal for microbial staining, IHC, fluorescence microscopy and CRO labs.",
    "image": "../assets/catalog-products/catalog-6149dad76d09.png"
  },
  {
    "id": "multifunctional-tube-rack",
    "category": "General Plasticware",
    "application": "Tube Racks",
    "name": "Multifunctional Tube Rack",
    "types": [],
    "description": "Autoclavable PS multifunctional tube rack, compatible with PCR strips, microtubes, cryovials, 15ml & 50ml conical tubes, ideal for microbiology and molecular CRO labs.",
    "image": "../assets/catalog-products/catalog-edf005fad90e.png"
  },
  {
    "id": "universal-pipette-tips-filtered-non-filtered",
    "category": "General Plasticware",
    "application": "Transfer Pipettes",
    "name": "Universal Pipette Tips, Filtered / Non-Filtered",
    "types": [
      "Non-Filtered Pipette Tips",
      "Filtered Pipette Tips"
    ],
    "description": "PP universal pipette tips, aerosol filter barrier option, bulk & rack packed, ideal for PCR, nucleic acid assay, CRO and high-throughput screening.",
    "image": "../assets/catalog-products/catalog-10bac6ce9477.png"
  },
  {
    "id": "universal-pipette-tips-filtered-non-filtered",
    "category": "Liquid Handling Consumables",
    "application": "Transfer Pipettes",
    "name": "Universal Pipette Tips, Filtered / Non-Filtered",
    "types": [
      "Non-Filtered Pipette Tips",
      "Filtered Pipette Tips"
    ],
    "description": "PP universal pipette tips, aerosol filter barrier option, bulk & rack packed, ideal for PCR, nucleic acid assay, CRO and high-throughput screening.",
    "image": "../assets/catalog-products/catalog-10bac6ce9477.png"
  },
  {
    "id": "cryo-box-cryogenic-storage-box",
    "category": "General Plasticware",
    "application": "Tube Racks",
    "name": "Cryo Box / Cryogenic Storage Box",
    "types": [
      "PP Cryogenic Storage Boxes",
      "PC Cryogenic Storage Boxes"
    ],
    "description": "Reusable PP & PC cryo storage boxes with alphanumeric grid, autoclavable, compatible with 2ml cryovials, ideal for biobank, cell preservation and CRO sample archiving.",
    "image": "../assets/catalog-products/catalog-582f8d4c7b77.png"
  },
  {
    "id": "cryo-box-cryogenic-storage-box",
    "category": "General Plasticware",
    "application": "Cryovials",
    "name": "Cryo Box / Cryogenic Storage Box",
    "types": [
      "PP Cryogenic Storage Boxes",
      "PC Cryogenic Storage Boxes"
    ],
    "description": "Reusable PP & PC cryo storage boxes with alphanumeric grid, autoclavable, compatible with 2ml cryovials, ideal for biobank, cell preservation and CRO sample archiving.",
    "image": "../assets/catalog-products/catalog-582f8d4c7b77.png"
  },
  {
    "id": "deep-well-plate",
    "category": "General Plasticware",
    "application": "Deep Well Plates",
    "name": "Deep Well Plate",
    "types": [
      "24-Well Deep Well Plates",
      "48-Well Deep Well Plate",
      "96-Well Deep Well Plates",
      "384-Well Deep Well Plates"
    ],
    "description": "RNase DNase free PP deep well plates, square & round well options, compatible with automated liquid handlers, ideal for nucleic acid extraction, CRO and AIDD high-throughput screening.",
    "image": "../assets/catalog-products/catalog-d51e5313a48e.png"
  },
  {
    "id": "erlenmeyer-shake-flask",
    "category": "General Plasticware",
    "application": "Cell Culture Flasks",
    "name": "Erlenmeyer Shake Flask",
    "types": [],
    "description": "Polycarbonate Erlenmeyer shake flasks available in 125 mL and 250 mL capacities.",
    "image": "../assets/catalog-products/catalog-a34cd062e05e.png"
  },
  {
    "id": "t-flask",
    "category": "General Plasticware",
    "application": "Cell Culture Flasks",
    "name": "T-Flask",
    "types": [
      "Vent cap (0.22 μm filter option)",
      "Sealed cap"
    ],
    "description": "Polystyrene T-flasks with plasma TC surface, 0.22μm vent filter cap available, endotoxin-free, ideal for adherent cell scale-up, CRO and drug discovery.",
    "image": "../assets/catalog-products/catalog-5ab93e8f22f5.png"
  },
  {
    "id": "tc-treated-cell-culture-plate",
    "category": "General Plasticware",
    "application": "Cell Culture Flasks",
    "name": "TC-Treated Cell Culture Plate",
    "types": [],
    "description": "Plasma TC-treated polystyrene cell culture plates, gamma sterile, endotoxin free, ideal for adherent cell culture, cytotoxicity assay, CRO and AIDD drug screening.",
    "image": "../assets/catalog-products/catalog-dcc29088e873.png"
  },
  {
    "id": "disposable-plastic-tissue-embedding-cassette",
    "category": "General Plasticware",
    "application": "Tissue Embedding Cassettes",
    "name": "Disposable Plastic Tissue Embedding Cassette",
    "types": [],
    "description": "Chemical resistant POM embedding cassettes, slanted labeling face, strip hole / micro mesh biopsy type, compatible with tissue processors, ideal for histopathology, IHC and CRO histology assay.",
    "image": "../assets/catalog-products/catalog-fcf7e107c4ee.png"
  },
  {
    "id": "catalog-flat-bottom-shake-flask",
    "category": "General Plasticware",
    "application": "Cell Culture Flasks",
    "name": "Flat-Bottom Shake Flask",
    "types": [
      "cell culture Flasks"
    ],
    "description": "Ideal for media preparation, mixing, and storage, including culture workflows for bacteria, fungi, and plant or animal cells.",
    "image": "../assets/catalog-products/catalog-cbb6da990f99.png"
  },
  {
    "id": "catalog-reaction-cuvettes",
    "category": "General Plasticware",
    "application": "Cuvettes and Cells",
    "name": "Reaction Cuvettes",
    "types": [],
    "description": "Reaction cuvettes for laboratory sample handling and analysis.",
    "image": "../assets/catalog-products/catalog-25e29d44d707.png"
  },
  {
    "id": "catalog-serum-bottle",
    "category": "General Plasticware",
    "application": "Cell Culture Flasks",
    "name": "Serum Bottle",
    "types": [],
    "description": "Containers for storing and transporting culture media, serum, buffers, and reagents.",
    "image": "../assets/catalog-products/catalog-10f37307a261.png"
  },
  {
    "id": "catalog-baffled-shake-flask",
    "category": "General Plasticware",
    "application": "Cell Culture Flasks",
    "name": "Baffled Shake Flask",
    "types": [],
    "description": "Culture vessels for cell biology, microbiology, and molecular biology workflows, including bacterial and yeast culture.",
    "image": "../assets/catalog-products/catalog-0a2a4d14f6d2.png"
  },
  {
    "id": "catalog-disposable-pipette-reservoir-bottle",
    "category": "General Plasticware",
    "application": "Carboys",
    "name": "Disposable Pipette Reservoir Bottle",
    "types": [],
    "description": "Disposable liquid reservoirs with leak integrity tested under 90 kPa vacuum for 180 seconds.",
    "image": "../assets/catalog-products/catalog-7edb6042ace9.png"
  },
  {
    "id": "catalog-water-dispensing-carboy",
    "category": "General Plasticware",
    "application": "Carboys",
    "name": "Water Dispensing Carboy",
    "types": [],
    "description": "Suitable for autoclaving large volumes of culture media, distilled water, and similar liquids.",
    "image": "../assets/catalog-products/catalog-398665e4c27e.png"
  },
  {
    "id": "catalog-storage-bottle",
    "category": "General Plasticware",
    "application": "Plastic Bottles",
    "name": "Storage Bottle",
    "types": [],
    "description": "Containers for large-volume culture media, distilled water, and other liquids.",
    "image": "../assets/catalog-products/catalog-207dbc7bf821.png"
  },
  {
    "id": "catalog-storage-carboy",
    "category": "General Plasticware",
    "application": "Carboys",
    "name": "Storage Carboy",
    "types": [],
    "description": "Suitable for autoclaving large volumes of culture media, distilled water, and similar liquids.",
    "image": "../assets/catalog-products/catalog-797822e6fd1f.png"
  },
  {
    "id": "catalog-wide-mouth-reagent-bottle",
    "category": "General Plasticware",
    "application": "Plastic Bottles",
    "name": "Wide-Mouth Reagent Bottle",
    "types": [],
    "description": "Designed for storage of laboratory reagents.",
    "image": "../assets/catalog-products/catalog-e73afcff682c.png"
  },
  {
    "id": "catalog-narrow-mouth-reagent-bottle",
    "category": "General Plasticware",
    "application": "Plastic Bottles",
    "name": "Narrow-Mouth Reagent Bottle",
    "types": [],
    "description": "Designed for storage of laboratory reagents.",
    "image": "../assets/catalog-products/catalog-a7fe1c826b85.png"
  },
  {
    "id": "catalog-extraction-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "Extraction Tubes",
    "types": [],
    "description": "For transferring liquids used in industrial chemistry, environmental monitoring, biochemistry, nucleic acid and antigen assays, and reagent buffers.",
    "image": "../assets/catalog-products/catalog-67566db2d377.png"
  },
  {
    "id": "catalog-microcentrifuge-storage-tubes",
    "category": "General Plasticware",
    "application": "Cryovials",
    "name": "Microcentrifuge Storage Tubes",
    "types": [],
    "description": "For liquid storage and transport, and protein blotting workflows.",
    "image": "../assets/catalog-products/catalog-08cc3013708b.png"
  },
  {
    "id": "catalog-round-bottom-centrifuge-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "Round-Bottom Centrifuge Tubes",
    "types": [],
    "description": "For separating samples by centrifugation.",
    "image": "../assets/catalog-products/catalog-a0e2a58c1a6e.png"
  },
  {
    "id": "catalog-conical-centrifuge-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "Conical Centrifuge Tubes",
    "types": [],
    "description": "For separating samples by centrifugation.",
    "image": "../assets/catalog-products/catalog-291b4db9cd66.png"
  },
  {
    "id": "catalog-self-standing-centrifuge-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "Self-Standing Centrifuge Tubes",
    "types": [],
    "description": "Self-standing tubes for sample handling and centrifugation.",
    "image": "../assets/catalog-products/catalog-5c4630cbc620.png"
  },
  {
    "id": "catalog-rack-packed-pipette-tips",
    "category": "General Plasticware",
    "application": "Transfer Pipettes",
    "name": "Rack-Packed Pipette Tips",
    "types": [],
    "description": "Designed for use with pipettes to transfer small and microliter volumes.",
    "image": "../assets/catalog-products/catalog-c4b4d91968ec.png"
  },
  {
    "id": "catalog-rack-packed-pipette-tips",
    "category": "Liquid Handling Consumables",
    "application": "Transfer Pipettes",
    "name": "Rack-Packed Pipette Tips",
    "types": [],
    "description": "Designed for use with pipettes to transfer small and microliter volumes.",
    "image": "../assets/catalog-products/catalog-c4b4d91968ec.png"
  },
  {
    "id": "catalog-universal-pipette-tips",
    "category": "General Plasticware",
    "application": "Transfer Pipettes",
    "name": "Universal Pipette Tips",
    "types": [],
    "description": "Designed for use with pipettes to transfer small and microliter volumes.",
    "image": "../assets/catalog-products/catalog-34966e3587a5.png"
  },
  {
    "id": "catalog-universal-pipette-tips",
    "category": "Liquid Handling Consumables",
    "application": "Transfer Pipettes",
    "name": "Universal Pipette Tips",
    "types": [],
    "description": "Designed for use with pipettes to transfer small and microliter volumes.",
    "image": "../assets/catalog-products/catalog-34966e3587a5.png"
  },
  {
    "id": "catalog-v-bottom-reagent-reservoir",
    "category": "Liquid Handling Consumables",
    "application": "Reservoirs",
    "name": "V-Bottom Reagent Reservoir",
    "types": [],
    "description": "A single-channel V-bottom design supports sample recovery, while the wide base improves stability.",
    "image": "../assets/catalog-products/catalog-35d9be4ac321.png"
  },
  {
    "id": "catalog-96-well-pcr-plate",
    "category": "General Plasticware",
    "application": "PCR Plates",
    "name": "96-Well PCR Plate",
    "types": [],
    "description": "Designed for compatibility with most automated laboratory instruments.",
    "image": "../assets/catalog-products/catalog-a2ed74d1588a.png"
  },
  {
    "id": "catalog-8-strip-pcr-tubes-with-optical-flat-caps",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "8-Strip PCR Tubes with Optical Flat Caps",
    "types": [],
    "description": "Compatible with most automated laboratory instruments; directional keying helps identify orientation.",
    "image": "../assets/catalog-products/catalog-a6f2faa09a2f.png"
  },
  {
    "id": "catalog-plate-sealing-film-and-aluminum-foil-seals",
    "category": "General Plasticware",
    "application": "Sealing Mats and Films",
    "name": "Plate Sealing Film and Aluminum Foil Seals",
    "types": [],
    "description": "For PCR, assay, and deep-well plates; designed to limit evaporation and allow easy piercing.",
    "image": "../assets/catalog-products/catalog-444a232e751b.png"
  },
  {
    "id": "catalog-disposable-sterility-testing-manifold",
    "category": "Filtration Consumables",
    "application": "Filtration Manifolds",
    "name": "Disposable Sterility Testing Manifold",
    "types": [],
    "description": "Disposable two-channel sterility testing manifold with a 125 mL AS tube body, ABS base and needle seat, and 0.22 μm PTFE/MCE filtration components.",
    "image": "../assets/catalog-products/catalog-8c7806f58917.png"
  },
  {
    "id": "catalog-24-well-deep-well-plate-with-magnetic-sleeve",
    "category": "General Plasticware",
    "application": "Deep Well Plates",
    "name": "24-Well Deep Well Plate with Magnetic Sleeve",
    "types": [],
    "description": "For sample identification and storage, robotic sampling, and automated pipetting systems.",
    "image": "../assets/catalog-products/catalog-4d4722dee226.png"
  },
  {
    "id": "catalog-8-channel-magnetic-rod-sleeve",
    "category": "General Plasticware",
    "application": "Deep Well Plates",
    "name": "8-Channel Magnetic Rod Sleeve",
    "types": [
      "Round-Bottom, Clear",
      "Conical-Bottom, Clear"
    ],
    "description": "For sample identification and storage, robotic sampling, and automated pipetting systems.",
    "image": "../assets/catalog-products/catalog-75f3e8d2ce75.png"
  },
  {
    "id": "catalog-hemocytometers",
    "category": "Anatomy, Pathology & Clinical Supplies",
    "application": "Hemocytometers",
    "name": "Hemocytometers",
    "types": [
      "Standard Neubauer Hemocytometer",
      "Chrome-Plated Neubauer Hemocytometer"
    ],
    "description": "",
    "image": "../assets/catalog-products/catalog-d3ec3aee5e5f.png"
  },
  {
    "id": "catalog-puncturable-screw-cap-urine-sediment-tube",
    "category": "Anatomy, Pathology & Clinical Supplies",
    "application": "Specimen Collection Containers",
    "name": "Puncturable Screw-Cap Urine Sediment Tube",
    "types": [],
    "description": "For urine sediment collection and handling, with a puncturable screw cap.",
    "image": "../assets/catalog-products/catalog-b9b5e9ed3073.png"
  },
  {
    "id": "catalog-ultrafiltration-centrifuge-tubes",
    "category": "General Plasticware",
    "application": "Centrifuge Tubes",
    "name": "Ultrafiltration Centrifuge Tubes",
    "types": [],
    "description": "Disposable, non-sterile 15 mL ultrafiltration tubes for research use. Evaluate recovery and retention before first use.",
    "image": "../assets/catalog-products/catalog-9de64099df17.png"
  },
  {
    "id": "catalog-sbs-format-2d-barcode-cryovials",
    "category": "General Plasticware",
    "application": "Cryovials",
    "name": "SBS-Format 2D Barcode Cryovials",
    "types": [],
    "description": "Barcode-enabled cryovials for sample identification and traceable cryogenic storage.",
    "image": "../assets/catalog-products/catalog-f6c6e9181075.png"
  },
  {
    "id": "catalog-disposable-plastic-specimen-cups",
    "category": "Anatomy, Pathology & Clinical Supplies",
    "application": "Specimen Collection Containers",
    "name": "Disposable Plastic Specimen Cups",
    "types": [
      "Stool Cup",
      "Urine Cup",
      "Vacuum Urine Cup"
    ],
    "description": "For collection and handling of stool and urine specimens.",
    "image": "../assets/catalog-products/catalog-afcedc475211.png"
  },
  {
    "id": "catalog-bottle-top-dispenser",
    "category": "Liquid Handling Consumables",
    "application": "Bottle-Top Dispensers",
    "name": "Bottle-Top Dispenser",
    "types": [],
    "description": "Suitable for dispensing weak acid and weak alkaline solutions.",
    "image": "../assets/catalog-products/catalog-034b48343851.png"
  },
  {
    "id": "catalog-micropipette",
    "category": "Liquid Handling Consumables",
    "application": "Mechanical Pipettes",
    "name": "Micropipette",
    "types": [],
    "description": "Pipettes for accurate transfer of microliter volumes.",
    "image": "../assets/catalog-products/catalog-437f93bac825.jpeg"
  },
  {
    "id": "catalog-large-volume-manual-pipette",
    "category": "Liquid Handling Consumables",
    "application": "Mechanical Pipettes",
    "name": "Large-Volume Manual Pipette",
    "types": [],
    "description": "Manual pipettes for accurate transfer of larger liquid volumes.",
    "image": "../assets/catalog-products/catalog-79a61400784d.png"
  },
  {
    "id": "catalog-pipette-stand",
    "category": "Liquid Handling Consumables",
    "application": "Mechanical Pipettes",
    "name": "Pipette Stand",
    "types": [],
    "description": "Keeps pipettes organized and accessible between uses.",
    "image": "../assets/catalog-products/catalog-555a6ab1a5d1.png"
  },
  {
    "id": "catalog-adjustable-multichannel-pipette",
    "category": "Liquid Handling Consumables",
    "application": "Mechanical Pipettes",
    "name": "Adjustable Multichannel Pipette",
    "types": [],
    "description": "Adjustable multichannel pipette for parallel liquid transfer across microplate wells.",
    "image": "../assets/catalog-products/adjustable-multichannel-pipette.jpeg"
  }
];
const importedProductDetails = [
  {
    "id": "disposable-petri-dish",
    "name": "Disposable Petri Dish",
    "description": "Sterile PS petri dishes for microbiology, cell culture, CRO labs & high-throughput screening. Vented lid, divided & grid options available, OEM bulk supply.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Petri Dishes"
    ],
    "image": "assets/catalog-products/catalog-e40477e3a36d.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Round Petri Dishes — Undivided",
            "Polystyrene (PS)",
            "35 × 12 mm; 12 mm; 10.5 mm; 35.7 mm; 39 mm",
            "10 pcs/bag, 200 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — Undivided",
            "Polystyrene (PS)",
            "60 × 13.8 mm; 13.8 mm; 12.8 mm; 56.4 mm; 59.2 mm",
            "10 pcs/bag, 1,000 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — Undivided",
            "Polystyrene (PS)",
            "90 × 15 mm; 15 mm; 13.1 mm; 86.4 mm; 88.4 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — Undivided",
            "Polystyrene (PS)",
            "100 × 16.8 mm; 16.8 mm; 15.4 mm; 94 mm; 98.3 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — Undivided",
            "Polystyrene (PS)",
            "120 × 20.9 mm; 20.9 mm; 19.4 mm; 115 mm; 119 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — Undivided",
            "Polystyrene (PS)",
            "150 × 16 mm; 16 mm; 14.3 mm; 143 mm; 147 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — 2 compartments",
            "Polystyrene (PS)",
            "90 × 15 mm; 15 mm; 13 mm; 86 mm; 88.9 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — 3 compartments",
            "Polystyrene (PS)",
            "90 × 15 mm; 15 mm; 12.8 mm; 86.3 mm; 88.6 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Round Petri Dishes — 4 compartments",
            "Polystyrene (PS)",
            "90 × 15 mm; 15 mm; 13 mm; 85.8 mm; 88.9 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Sterilization Method: Ethylene Oxide (EO) Sterilization | Catalog ID: disposable-petri-dish"
          ],
          [
            "Square Petri Dishes",
            "Polystyrene (PS)",
            "10 × 10 cm; 15 mm; 13 mm; 100 × 100 mm; 103 × 103 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Grid Pattern: No grid lines | Sterilization Method: Ethylene Oxide (EO) Sterilization | All dimensions are manually measured and may have slight deviations. | Catalog ID: disposable-petri-dish"
          ],
          [
            "Square Petri Dishes",
            "Polystyrene (PS)",
            "10 × 10 cm; 15 mm; 13 mm; 100 × 100 mm; 103 × 103 mm",
            "10 pcs/bag, 500 pcs/ctn",
            "Grid Pattern: With grid lines | Sterilization Method: Ethylene Oxide (EO) Sterilization | All dimensions are manually measured and may have slight deviations. | Catalog ID: disposable-petri-dish"
          ],
          [
            "Square Petri Dishes",
            "Polystyrene (PS)",
            "13 × 13 cm; 16 mm; 15 mm; 125 × 125 mm; 130 × 130 mm",
            "10 pcs/bag, 300 pcs/ctn",
            "Grid Pattern: No grid lines | Sterilization Method: Ethylene Oxide (EO) Sterilization | All dimensions are manually measured and may have slight deviations. | Catalog ID: disposable-petri-dish"
          ],
          [
            "Square Petri Dishes",
            "Polystyrene (PS)",
            "25 × 25 cm; 10 mm; 17 mm; 230 × 230 mm; 240 × 240 mm",
            "1 pc/bag, 40 pcs/ctn",
            "Grid Pattern: No grid lines | Sterilization Method: Ethylene Oxide (EO) Sterilization | All dimensions are manually measured and may have slight deviations. | Catalog ID: disposable-petri-dish"
          ]
        ]
      }
    ]
  },
  {
    "id": "disposable-sterile-plastic-inoculating-loops",
    "name": "Disposable Sterile Plastic Inoculating Loops",
    "description": "Inoculating loops are widely used laboratory consumables in life science research, commonly utilized for microbiological testing, cellular microbiology, molecular biology and a range of other laboratory applications.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Spreader"
    ],
    "image": "assets/catalog-products/catalog-a711c72d8c13.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Nickel-Chromium Alloy Inoculating Loops",
            "",
            "1 mm",
            "",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ],
          [
            "Nickel-Chromium Alloy Inoculating Loops",
            "",
            "2 mm",
            "",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ],
          [
            "Nickel-Chromium Alloy Inoculating Loops",
            "",
            "3 mm",
            "",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ],
          [
            "Nickel-Chromium Alloy Inoculating Loops",
            "",
            "4 mm",
            "",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ],
          [
            "Nickel-Chromium Alloy Inoculating Loops",
            "",
            "5 mm",
            "",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ],
          [
            "Polystyrene Inoculating Loops",
            "1 μL",
            "",
            "100 pcs/bag; 5,000 pcs/ctn",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ],
          [
            "Polystyrene Inoculating Loops",
            "10 μL",
            "",
            "100 pcs/bag; 5,000 pcs/ctn",
            "Catalog ID: disposable-sterile-plastic-inoculating-loops"
          ]
        ]
      }
    ]
  },
  {
    "id": "disposable-sterile-cell-spreader",
    "name": "Disposable Sterile Cell Spreader / Plate Spreader",
    "description": "Sterile plastic plate spreaders for spreading bacterial suspension on agar plates, ideal for food safety, water testing and CRO microbiology laboratories, no flaming required.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Spreader"
    ],
    "image": "assets/catalog-products/catalog-7af7cd8d42eb.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Cell Spreader",
            "Plastic",
            "140 mm; 30 mm; Not specified",
            "100 pcs/bag (individually wrapped)",
            "Shape: L-shaped | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: disposable-sterile-cell-spreader"
          ],
          [
            "Cell Spreader",
            "Glass",
            "190 mm; 44 mm; Not specified",
            "Not specified",
            "Shape: L-shaped | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: disposable-sterile-cell-spreader"
          ],
          [
            "Cell Spreader",
            "Glass",
            "163 mm; 36 mm; 188 mm",
            "Not specified",
            "Shape: Triangular | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: disposable-sterile-cell-spreader"
          ],
          [
            "Cell Spreader",
            "Stainless steel",
            "205 mm; 31 mm; 220 mm",
            "Not specified",
            "Shape: Triangular | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: disposable-sterile-cell-spreader"
          ]
        ]
      }
    ]
  },
  {
    "id": "stomacher-bag",
    "name": "Stomacher Bag",
    "description": "Sterile homogenizing stomacher bags 80ml / 400ml / 3500ml, filter blender bags separate solid residues automatically, ideal for food safety testing, CRO microbiology lab.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Bags"
    ],
    "image": "assets/catalog-products/catalog-0d0f29eae8cd.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "With press-seal strip",
            "100 mL",
            "12 × 11 cm",
            "100 pcs/bag (individually packed)",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "With press-seal strip",
            "200 mL",
            "12 × 18 cm",
            "100 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "With press-seal strip",
            "9 L",
            "40 × 50 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "With press-seal strip",
            "9 L",
            "50 × 40 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "With press-seal strip",
            "12 L",
            "45 × 55 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "1 L",
            "20 × 22 cm",
            "100 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "1.5 L",
            "20 × 27 cm",
            "100 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "2 L",
            "20 × 32 cm",
            "100 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "2.5 L",
            "25 × 32 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "4 L",
            "25 × 40 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "5.5 L",
            "30 × 40 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ],
          [
            "Stand-up bag with press-seal strip",
            "6.5 L",
            "35 × 40 cm",
            "50 pcs/bag",
            "Sterilization: Ethylene Oxide (EO) | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: stomacher-bag"
          ]
        ]
      }
    ]
  },
  {
    "id": "conical-tubes",
    "name": "Conical Tubes",
    "description": "Sterile PP centrifuge tubes, 1.5ml,15ml,50ml, screw cap & snap cap, RNase DNase free for microbiology testing, molecular biology and CRO laboratories.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-dc352321b5b8.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Snap cap",
            "Polypropylene (PP)",
            "0.5 mL",
            "500 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Snap cap",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Snap cap",
            "Polypropylene (PP)",
            "2 mL",
            "500 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Snap cap",
            "Polypropylene (PP)",
            "5 mL",
            "100 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Screw cap",
            "Polypropylene (PP)",
            "5 mL",
            "50 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Screw cap",
            "Polypropylene (PP)",
            "10 mL",
            "50 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Screw cap",
            "Polypropylene (PP)",
            "15 mL",
            "50 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Screw cap",
            "Polypropylene (PP)",
            "50 mL",
            "25 pcs/bag",
            "Tube Color: Transparent | Catalog ID: conical-tubes"
          ],
          [
            "Screw cap",
            "Polypropylene (PP)",
            "15 mL",
            "50 pcs/bag",
            "Tube Color: Amber | Catalog ID: conical-tubes"
          ],
          [
            "Screw cap",
            "Polypropylene (PP)",
            "50 mL",
            "25 pcs/bag",
            "Tube Color: Amber | Catalog ID: conical-tubes"
          ]
        ]
      }
    ]
  },
  {
    "id": "serological-pipette",
    "name": "Serological Pipette",
    "description": "Disposable polystyrene serological pipettes with cotton plug & color code, RNase DNase free, ideal for cell culture, media preparation and CRO laboratory liquid handling.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Serological Pipettes"
    ],
    "image": "assets/catalog-products/catalog-bdf2266abdd3.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "",
            "Polystyrene (PS)",
            "1 mL",
            "277 mm; 5.2 mm; 2.4 mm; 5.1 mm",
            "50 pcs/bag; 1,000 pcs/ctn",
            "Graduation: 0.01 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "",
            "Polystyrene (PS)",
            "2 mL",
            "277 mm; 5.2 mm; 2.4 mm; 5.2 mm",
            "50 pcs/bag; 1,000 pcs/ctn",
            "Graduation: 0.01 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "",
            "Polystyrene (PS)",
            "5 mL",
            "341 mm; 8 mm; 3.1 mm; 8 mm",
            "50 pcs/bag; 500 pcs/ctn",
            "Graduation: 0.1 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "",
            "Polystyrene (PS)",
            "10 mL",
            "345 mm; 7.8 mm; 3.5 mm; 9.7 mm",
            "50 pcs/bag; 500 pcs/ctn",
            "Graduation: 0.1 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "",
            "Polystyrene (PS)",
            "25 mL",
            "345 mm; 7.8 mm; 3.4 mm; 14 mm",
            "25 pcs/bag; 250 pcs/ctn",
            "Graduation: 0.1 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "",
            "Polystyrene (PS)",
            "50 mL",
            "341 mm; 8.3 mm; 5.4 mm; 18 mm",
            "25 pcs/bag; 200 pcs/ctn",
            "Graduation: 0.5 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "",
            "Polystyrene (PS)",
            "100 mL",
            "350 mm; 8.3 mm; 5.4 mm; 24.5 mm",
            "10 pcs/bag; 100 pcs/ctn",
            "Graduation: 1 mL | Dimensions are manually measured and for reference only; slight measurement deviations may occur. | Catalog ID: serological-pipette"
          ],
          [
            "40.190101",
            "General-purpose polystyrene (GPPS)",
            "1ml",
            "",
            "50pcs/bag,20bags/ctn",
            ""
          ],
          [
            "40.191101",
            "General-purpose polystyrene (GPPS)",
            "2ml",
            "",
            "50pcs/bag,20bags/ctn",
            ""
          ],
          [
            "40.192101",
            "General-purpose polystyrene (GPPS)",
            "5ml",
            "",
            "50pcs/bag,10bags/ctn",
            ""
          ],
          [
            "40.193101",
            "General-purpose polystyrene (GPPS)",
            "10ml",
            "",
            "50pcs/bag,10bags/ctn",
            ""
          ],
          [
            "40.194101",
            "General-purpose polystyrene (GPPS)",
            "25ml",
            "",
            "25pcs/bag,10bags/ctn",
            ""
          ],
          [
            "40.195101",
            "General-purpose polystyrene (GPPS)",
            "50ml",
            "",
            "25pcs/bag,8bags/ctn",
            ""
          ]
        ]
      }
    ]
  },
  {
    "id": "transfer-pipette",
    "name": "Transfer Pipette",
    "description": "Sterile plastic transfer pipettes with integrated bulb, graduated optional, easy liquid transfer for food testing, CRO, microbiology and cell culture labs.",
    "categories": [
      "General Plasticware",
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Transfer Pipettes"
    ],
    "image": "assets/catalog-products/catalog-d63f38f8ea96.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Capacity",
          "Notes"
        ],
        "rows": [
          [
            "Low-Density Polyethylene (LDPE)",
            "0.1 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "0.2 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "0.3 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "0.5 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "1 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "2 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "3 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "5 mL",
            "Catalog ID: transfer-pipette"
          ],
          [
            "Low-Density Polyethylene (LDPE)",
            "10 mL",
            "Catalog ID: transfer-pipette"
          ]
        ]
      }
    ]
  },
  {
    "id": "plastic-test-tubes",
    "name": "Plastic Test Tubes",
    "description": "Sterile round bottom plastic test tubes 12×75mm,13×100mm,16×100mm, ideal for microbial culture, biochemical test and CRO laboratories.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Test Tubes"
    ],
    "image": "assets/catalog-products/catalog-174946bbf9d0.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Polyethylene (PE)",
            "10 × 75 mm",
            "500 pcs/box",
            "Catalog ID: plastic-test-tubes"
          ],
          [
            "Polyethylene (PE)",
            "10 × 100 mm",
            "500 pcs/box",
            "Catalog ID: plastic-test-tubes"
          ],
          [
            "Polyethylene (PE)",
            "12 × 75 mm",
            "500 pcs/box",
            "Catalog ID: plastic-test-tubes"
          ],
          [
            "Polyethylene (PE)",
            "12 × 100 mm",
            "500 pcs/box",
            "Catalog ID: plastic-test-tubes"
          ],
          [
            "Polyethylene (PE)",
            "15 × 100 mm",
            "300 pcs/box",
            "Catalog ID: plastic-test-tubes"
          ]
        ]
      }
    ]
  },
  {
    "id": "mixed-cellulose-esters-cn-ca",
    "name": "Mixed Cellulose Esters, CN-CA",
    "description": "Sterile gridded MCE membrane filters 0.22 μm and 0.45 μm, reusable autoclavable plastic filter funnels for membrane filtration, water quality and beverage microbial testing.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Filter Paper"
    ],
    "image": "assets/catalog-products/catalog-6ec82f0b6ac0.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Dimensions",
          "Notes"
        ],
        "rows": [
          [
            "50 mm; 0.22 μm",
            "Catalog ID: mixed-cellulose-esters-cn-ca"
          ],
          [
            "50 mm; 0.45 μm",
            "Catalog ID: mixed-cellulose-esters-cn-ca"
          ],
          [
            "60 mm; 0.22 μm",
            "Catalog ID: mixed-cellulose-esters-cn-ca"
          ],
          [
            "60 mm; 0.45 μm",
            "Catalog ID: mixed-cellulose-esters-cn-ca"
          ]
        ]
      }
    ]
  },
  {
    "id": "96well-384well-pcr-qpcr-plate",
    "name": "96well/384well PCR/QPCR Plate",
    "description": "RNase DNase free polypropylene PCR plates, clear & white options, compatible with thermal cyclers, ideal for molecular biology, CRO and AIDD high-throughput screening.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "PCR Plates"
    ],
    "image": "assets/catalog-products/catalog-10bb5317188d.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "0.1 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Non-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "0.1 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Semi-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "0.1 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Full-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "0.2 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Non-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "0.2 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Semi-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "0.2 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Full-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "PCR Plates",
            "Polypropylene (PP)",
            "25 μL",
            "150 pcs/box; 50 pcs/ctn",
            "Well Format: 384-well | Skirt Style: Full-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "QPCR Plates",
            "Polypropylene (PP)",
            "0.1 mL",
            "15 pcs/box; 150 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Semi-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ],
          [
            "QPCR Plates",
            "Polypropylene (PP)",
            "0.2 mL",
            "10 pcs/box; 100 pcs/ctn",
            "Well Format: 96-well | Skirt Style: Semi-skirted | Color: Clear / White | Catalog ID: 96well-384well-pcr-qpcr-plate"
          ]
        ]
      }
    ]
  },
  {
    "id": "8-strip-pcr-tubes",
    "name": "8-Strip PCR Tubes",
    "description": "RNase DNase free 8 tube PCR strips, clear & white available, compatible with thermal cyclers, ideal for molecular lab and CRO qPCR testing.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-105b381863d1.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Capacity",
          "Notes"
        ],
        "rows": [
          [
            "Polypropylene (PP)",
            "0.1 mL",
            "Color: Clear | Catalog ID: 8-strip-pcr-tubes"
          ],
          [
            "Polypropylene (PP)",
            "0.1 mL",
            "Color: White | Catalog ID: 8-strip-pcr-tubes"
          ],
          [
            "Polypropylene (PP)",
            "0.2 mL",
            "Color: Clear | Catalog ID: 8-strip-pcr-tubes"
          ],
          [
            "Polypropylene (PP)",
            "0.2 mL",
            "Color: White | Catalog ID: 8-strip-pcr-tubes"
          ]
        ]
      }
    ]
  },
  {
    "id": "cryovial-cryogenic-vial-cryo-tube",
    "name": "Cryovial / Cryogenic Vial / Cryo Tube",
    "description": "RNase DNase free PP cryo tubes with silicone gasket, self-standing option, ideal for cell preservation, strain banking, CRO and biobank sample storage.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cryovials"
    ],
    "image": "assets/catalog-products/catalog-60fbd5da37da.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "0.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-05-01 | Lid Type: Short cap | Bottom Shape: Pointed bottom; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "0.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-05-02 | Lid Type: Short cap with continuous cap strip | Bottom Shape: Pointed bottom; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "1.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-10-01 | Lid Type: Short cap | Bottom Shape: Conical base; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-01 | Lid Type: Short cap | Bottom Shape: Pointed bottom | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-02 | Lid Type: Short cap with continuous cap strip | Bottom Shape: Pointed bottom | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-03 | Lid Type: Short cap | Bottom Shape: Pointed bottom; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-04 | Lid Type: Short cap with continuous cap strip | Bottom Shape: Pointed bottom; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-12 | Lid Type: Short cap | Bottom Shape: Conical base | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-13 | Lid Type: Short cap with continuous cap strip | Bottom Shape: Conical base | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-02 | Lid Type: Short cap | Bottom Shape: Conical base; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-03 | Lid Type: Short cap with continuous cap strip | Bottom Shape: Conical base; self-standing | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-02-P | Lid Type: Short cap | Bottom Shape: Conical base; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Short-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-02-M | Lid Type: Short cap | Bottom Shape: Conical base; self-standing | Scale: Molded scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Outer-Rotating Cap Cryovials",
            "Polypropylene (PP)",
            "2 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-01 | Lid Type: Outer-rotating cap | Bottom Shape: Conical base; self-standing | Sealing Ring: Present | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Outer-Rotating Cap Cryovials",
            "Polypropylene (PP)",
            "5 mL",
            "200 pcs/pack; 20 packs/box",
            "Item Number: FT-50-09 | Lid Type: Outer-rotating cap | Bottom Shape: Pointed bottom | Sealing Ring: None | Scale: Molded scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Outer-Rotating Cap Cryovials",
            "Polypropylene (PP)",
            "5 mL",
            "200 pcs/pack; 20 packs/box",
            "Item Number: FT-50-01 | Lid Type: Outer-rotating cap | Bottom Shape: Conical base; self-standing | Sealing Ring: Present | Scale: Molded scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Outer-Rotating Cap Cryovials",
            "Polypropylene (PP)",
            "7 mL",
            "200 pcs/pack; 20 packs/box",
            "Item Number: FT-70-01 | Lid Type: Outer-rotating cap | Bottom Shape: Pointed bottom; self-standing | Sealing Ring: Present | Scale: None | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Outer-Rotating Cap Cryovials",
            "Polypropylene (PP)",
            "10 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-100-01 | Lid Type: Outer-rotating cap | Bottom Shape: Conical base; self-standing | Sealing Ring: Present | Scale: Molded scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "0.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-05-31 | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: Printed scale | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-31 | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: Printed scale | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "1.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-10-03 | Lid Type: High cap | Bottom Shape: Conical base | Scale: None | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "1.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-10-04 | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: None | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-07 | Lid Type: High cap | Bottom Shape: Pointed bottom; self-standing | Scale: None | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "1.5 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-15-08 | Lid Type: High cap | Bottom Shape: Pointed bottom | Scale: None | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-04 | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: None | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-05 | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: None | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-06 | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: Printed scale | Color: Transparent | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "High-Cap Cryovials",
            "Polypropylene (PP)",
            "2.0 mL",
            "500 pcs/pack; 20 packs/box",
            "Item Number: FT-20-05-Z | Lid Type: High cap | Bottom Shape: Conical base; self-standing | Scale: None | Color: Brown | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "1 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-10-07 | Lid Type: External-rotation cap | Bottom Shape: Conical base; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "1 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-10-08 | Lid Type: Internal-rotation cap | Bottom Shape: Conical base; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "2 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-20-07 | Lid Type: External-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "2 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-20-08 | Lid Type: Internal-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "3 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-30-07 | Lid Type: External-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "3 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-30-08 | Lid Type: Internal-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "4 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-40-07 | Lid Type: External-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "4 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-40-08 | Lid Type: Internal-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "5 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-50-07 | Lid Type: External-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "External- and Internal-Rotation Cryovials",
            "Polypropylene (PP)",
            "5 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-50-08 | Lid Type: Internal-rotation cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Stand-Up Round-Bottom Cryovials",
            "Polypropylene (PP)",
            "2 mL",
            "100 pcs/pack; 20 packs/box",
            "Item Number: FT-20-0709 | Lid Type: Outer-rotating cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ],
          [
            "Stand-Up Round-Bottom Cryovials",
            "Polypropylene (PP)",
            "5 mL",
            "50 pcs/pack; 20 packs/box",
            "Item Number: FT-50-0709 | Lid Type: Outer-rotating cap | Bottom Shape: Round bottom; self-standing | Scale: Printed scale | Catalog ID: cryovial-cryogenic-vial-cryo-tube"
          ]
        ]
      }
    ]
  },
  {
    "id": "cover-glass-microscope-slide",
    "name": "Cover Glass & Microscope Slide",
    "description": "Optical glass microscope slides and coverslips, pre-cleaned, frosted & positively charged options, ideal for microbial staining, IHC, fluorescence microscopy and CRO labs.",
    "categories": [
      "Anatomy, Pathology & Clinical Supplies"
    ],
    "applications": [
      "Microscope Slides",
      "Cover Glass and Slides"
    ],
    "image": "assets/catalog-products/catalog-6149dad76d09.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Square Cover Glass",
            "18 × 18 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Square Cover Glass",
            "20 × 20 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Square Cover Glass",
            "22 × 22 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Square Cover Glass",
            "24 × 24 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Rectangular Cover Glass",
            "24 × 32 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Rectangular Cover Glass",
            "24 × 40 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Rectangular Cover Glass",
            "24 × 46 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Rectangular Cover Glass",
            "24 × 50 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Rectangular Cover Glass",
            "24 × 60 mm",
            "",
            "Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Microscope Slides",
            "25.4 × 76.2 mm",
            "50 pcs/box",
            "Surface Finish: Clear (plain) | Thickness: 1.0–1.2 mm | Catalog ID: cover-glass-microscope-slide"
          ],
          [
            "Microscope Slides",
            "25.4 × 76.2 mm",
            "50 pcs/box",
            "Surface Finish: Frosted | Thickness: 1.0–1.2 mm | Catalog ID: cover-glass-microscope-slide"
          ]
        ]
      }
    ]
  },
  {
    "id": "multifunctional-tube-rack",
    "name": "Multifunctional Tube Rack",
    "description": "Autoclavable PS multifunctional tube rack, compatible with PCR strips, microtubes, cryovials, 15ml & 50ml conical tubes, ideal for microbiology and molecular CRO labs.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Tube Racks"
    ],
    "image": "assets/catalog-products/catalog-edf005fad90e.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Notes"
        ],
        "rows": [
          [
            "Feature: Dimensions (L × W × H) | Specification: 250 × 130 × 50 mm | Catalog ID: multifunctional-tube-rack"
          ],
          [
            "Feature: Available Colors | Specification: Orange, blue, green, purple, and pink | Catalog ID: multifunctional-tube-rack"
          ],
          [
            "Feature: Hole Count | Specification: 50 | Catalog ID: multifunctional-tube-rack"
          ],
          [
            "Feature: Compatible Tube Diameter | Specification: 18–22 mm | Catalog ID: multifunctional-tube-rack"
          ],
          [
            "Feature: Material | Specification: Polystyrene (PS) | Catalog ID: multifunctional-tube-rack"
          ],
          [
            "Feature: Autoclavable | Specification: Yes | Catalog ID: multifunctional-tube-rack"
          ]
        ]
      }
    ]
  },
  {
    "id": "universal-pipette-tips-filtered-non-filtered",
    "name": "Universal Pipette Tips, Filtered / Non-Filtered",
    "description": "PP universal pipette tips, aerosol filter barrier option, bulk & rack packed, ideal for PCR, nucleic acid assay, CRO and high-throughput screening.",
    "categories": [
      "General Plasticware",
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Transfer Pipettes"
    ],
    "image": "assets/catalog-products/catalog-10bac6ce9477.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Non-Filtered Pipette Tips",
            "10 μL",
            "",
            "200 pcs/bag; 1,000 pcs/bag",
            "Sterility: Non-sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "200 μL",
            "",
            "200 pcs/bag; 1,000 pcs/bag",
            "Sterility: Non-sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "300 μL",
            "",
            "200 pcs/bag; 1,000 pcs/bag",
            "Sterility: Non-sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "1,000 μL (1 mL)",
            "",
            "100 pcs/bag; 500 pcs/bag",
            "Sterility: Non-sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "5 mL",
            "",
            "20 pcs/bag; 300 pcs/bag",
            "Sterility: Non-sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "10 mL",
            "",
            "5 pcs/bag; 100 pcs/bag",
            "Sterility: Non-sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "1 mL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Sterility: Sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "5 mL",
            "",
            "24 pcs/box; 100 pcs/bag",
            "Sterility: Sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Non-Filtered Pipette Tips",
            "10 mL",
            "",
            "24 pcs/box; 100 pcs/bag",
            "Sterility: Sterile | Tip material: Polypropylene (PP) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "10 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Standard | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "200 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Standard | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "1 mL",
            "",
            "100 pcs/box; 500 pcs/bag",
            "Style: Standard | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "5 mL",
            "",
            "28 pcs/box; 150 pcs/bag",
            "Style: Standard | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "10 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Extended-length | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "200 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Extended-length | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "1 mL",
            "",
            "96 pcs/box; 500 pcs/bag",
            "Style: Extended-length | Sterility: Non-sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "10 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Standard | Sterility: Sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "200 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Standard | Sterility: Sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "300 μL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Standard | Sterility: Sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "1 mL",
            "",
            "96 pcs/box; 1,000 pcs/bag",
            "Style: Standard | Sterility: Sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "5 mL",
            "",
            "24 pcs/box; 100 pcs/bag",
            "Style: Standard | Sterility: Sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Filtered Pipette Tips",
            "10 mL",
            "",
            "24 pcs/box; 100 pcs/bag",
            "Style: Standard | Sterility: Sterile | Tip material: Polypropylene (PP) | Filter material: Polyethylene (PE) | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "10 μL",
            "3.3 mm; 3.5 mm",
            "",
            "Tip Type: Non-filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "200 μL",
            "5.5 mm; 50 mm",
            "",
            "Tip Type: Non-filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "300 μL",
            "5.3 mm; 52 mm",
            "",
            "Tip Type: Non-filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "1,000 μL (1 mL)",
            "7.5 mm; 71 mm",
            "",
            "Tip Type: Non-filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "5 mL",
            "13 mm; 146 mm",
            "",
            "Tip Type: Non-filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "10 mL",
            "14.5 mm; 160 mm",
            "",
            "Tip Type: Non-filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "10 μL",
            "5 mm; 32 mm",
            "",
            "Tip Type: Filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "10 μL",
            "5 mm; 49 mm",
            "",
            "Tip Type: Filtered, extended-length | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "200 μL",
            "5.5 mm; 50 mm",
            "",
            "Tip Type: Filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "200 μL",
            "6 mm; 90 mm",
            "",
            "Tip Type: Filtered, extended-length | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "1 mL",
            "8 mm; 71 mm",
            "",
            "Tip Type: Filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "1 mL",
            "8 mm; 101 mm",
            "",
            "Tip Type: Filtered, extended-length | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Tip Dimensions",
            "5 mL",
            "13 mm; 145 mm",
            "",
            "Tip Type: Filtered | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ],
          [
            "Pipette Compatibility",
            "",
            "",
            "",
            "Compatible Pipette Brands: Eppendorf, Thermo Fisher, BRAND, Gilson, Sartorius Biohit, Thermo Fisher Finnpipette, and DragonLab | Catalog ID: universal-pipette-tips-filtered-non-filtered"
          ]
        ]
      }
    ]
  },
  {
    "id": "cryo-box-cryogenic-storage-box",
    "name": "Cryo Box / Cryogenic Storage Box",
    "description": "Reusable PP & PC cryo storage boxes with alphanumeric grid, autoclavable, compatible with 2ml cryovials, ideal for biobank, cell preservation and CRO sample archiving.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Tube Racks",
      "Cryovials"
    ],
    "image": "assets/catalog-products/catalog-582f8d4c7b77.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Capacity",
          "Dimensions",
          "Notes"
        ],
        "rows": [
          [
            "PP Cryogenic Storage Boxes",
            "Polypropylene (PP)",
            "81 places; 2 mL",
            "131 × 131 × 52 mm",
            "Style: Standard | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ],
          [
            "PP Cryogenic Storage Boxes",
            "Polypropylene (PP)",
            "100 places; Not specified",
            "133 × 133 × 53 mm",
            "Style: Column-style | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ],
          [
            "PP Cryogenic Storage Boxes",
            "Polypropylene (PP)",
            "100 places; Not specified",
            "143 × 143 × 53 mm",
            "Style: Standard | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ],
          [
            "PC Cryogenic Storage Boxes",
            "Polycarbonate (PC)",
            "25 places; 2 mL",
            "75.5 × 75.5 × 52.7 mm; 12.3 mm",
            "Available Colors: Red, yellow, blue, and green | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ],
          [
            "PC Cryogenic Storage Boxes",
            "Polycarbonate (PC)",
            "81 places; 2 mL",
            "133 × 133 × 53 mm; Not specified",
            "Available Colors: Red, yellow, blue, and green | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ],
          [
            "PC Cryogenic Storage Boxes",
            "Polycarbonate (PC)",
            "100 places; 2 mL",
            "133 × 133 × 53 mm; Not specified",
            "Available Colors: Red, yellow, blue, and green | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ],
          [
            "PC Cryogenic Storage Boxes",
            "Polycarbonate (PC)",
            "81 places; 5 mL",
            "133 × 133 × 93 mm; Not specified",
            "Available Colors: Red, yellow, blue, and green | Autoclavable | Catalog ID: cryo-box-cryogenic-storage-box"
          ]
        ]
      }
    ]
  },
  {
    "id": "deep-well-plate",
    "name": "Deep Well Plate",
    "description": "RNase DNase free PP deep well plates, square & round well options, compatible with automated liquid handlers, ideal for nucleic acid extraction, CRO and AIDD high-throughput screening.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Deep Well Plates"
    ],
    "image": "assets/catalog-products/catalog-d51e5313a48e.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Capacity",
          "Dimensions",
          "Notes"
        ],
        "rows": [
          [
            "24-Well Deep Well Plates",
            "Polypropylene (PP)",
            "",
            "16.7 mm",
            "Well Shape: Square | Bottom Shape: Conical | Catalog ID: deep-well-plate"
          ],
          [
            "24-Well Deep Well Plates",
            "Polypropylene (PP)",
            "",
            "16.7 mm",
            "Well Shape: Square | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "48-Well Deep Well Plate",
            "Polypropylene (PP)",
            "",
            "8 × 17 mm",
            "Well Shape: Rectangular | Bottom Shape: U-bottom | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "0.4 mL",
            "",
            "Well Shape: Square | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "0.5 mL",
            "",
            "Well Shape: Square | Bottom Shape: Conical | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "1.0 mL",
            "",
            "Well Shape: Square | Bottom Shape: Conical | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "1.2 mL",
            "",
            "Well Shape: Square | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "1.6 mL",
            "",
            "Well Shape: Square | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "1.3 mL",
            "",
            "Well Shape: Round | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "2.0 mL",
            "",
            "Well Shape: Round | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "2.2 mL",
            "",
            "Well Shape: Round | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "96-Well Deep Well Plates",
            "Polypropylene (PP)",
            "2.2 mL",
            "",
            "Well Shape: Square | Bottom Shape: Round | Catalog ID: deep-well-plate"
          ],
          [
            "384-Well Deep Well Plates",
            "Polypropylene (PP)",
            "120 μL",
            "",
            "Well Shape: Round | Bottom Shape: Conical | Catalog ID: deep-well-plate"
          ],
          [
            "384-Well Deep Well Plates",
            "Polypropylene (PP)",
            "240 μL",
            "",
            "Well Shape: Round | Bottom Shape: Conical | Catalog ID: deep-well-plate"
          ]
        ]
      }
    ]
  },
  {
    "id": "erlenmeyer-shake-flask",
    "name": "Erlenmeyer Shake Flask",
    "description": "Polycarbonate Erlenmeyer shake flasks available in 125 mL and 250 mL capacities.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cell Culture Flasks"
    ],
    "image": "assets/catalog-products/catalog-a34cd062e05e.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Capacity",
          "Notes"
        ],
        "rows": [
          [
            "Polycarbonate (PC)",
            "125 mL",
            "Catalog ID: erlenmeyer-shake-flask"
          ],
          [
            "Polycarbonate (PC)",
            "250 mL",
            "Catalog ID: erlenmeyer-shake-flask"
          ]
        ]
      }
    ]
  },
  {
    "id": "t-flask",
    "name": "T-Flask",
    "description": "Polystyrene T-flasks with plasma TC surface, 0.22μm vent filter cap available, endotoxin-free, ideal for adherent cell scale-up, CRO and drug discovery.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cell Culture Flasks"
    ],
    "image": "assets/catalog-products/catalog-5ab93e8f22f5.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Vent cap (0.22 μm filter option)",
            "Polystyrene (PS)",
            "T25",
            "10 pcs",
            "Surface Treatment: TC-treated | Sterilization: Sterile | Bags per Carton: 20 | Sterile, RNase-free, DNase-free, and pyrogen-free | Graduated flask body | Individually packed in sterile resealable bags | Catalog ID: t-flask"
          ],
          [
            "Vent cap (0.22 μm filter option)",
            "Polystyrene (PS)",
            "T75",
            "5 pcs",
            "Surface Treatment: TC-treated | Sterilization: Sterile | Bags per Carton: 20 | Sterile, RNase-free, DNase-free, and pyrogen-free | Graduated flask body | Individually packed in sterile resealable bags | Catalog ID: t-flask"
          ],
          [
            "Vent cap (0.22 μm filter option)",
            "Polystyrene (PS)",
            "T175",
            "5 pcs",
            "Surface Treatment: TC-treated | Sterilization: Sterile | Bags per Carton: 8 | Sterile, RNase-free, DNase-free, and pyrogen-free | Graduated flask body | Individually packed in sterile resealable bags | Catalog ID: t-flask"
          ],
          [
            "Vent cap (0.22 μm filter option)",
            "Polystyrene (PS)",
            "T225",
            "5 pcs",
            "Surface Treatment: TC-treated | Sterilization: Sterile | Bags per Carton: 5 | Sterile, RNase-free, DNase-free, and pyrogen-free | Graduated flask body | Individually packed in sterile resealable bags | Catalog ID: t-flask"
          ],
          [
            "Sealed cap",
            "Polystyrene (PS)",
            "T25",
            "10 pcs",
            "Surface Treatment: TC-treated | Sterilization: Sterile | Bags per Carton: 20 | Sterile, RNase-free, DNase-free, and pyrogen-free | Graduated flask body | Individually packed in sterile resealable bags | Catalog ID: t-flask"
          ],
          [
            "Sealed cap",
            "Polystyrene (PS)",
            "T75",
            "5 pcs",
            "Surface Treatment: TC-treated | Sterilization: Sterile | Bags per Carton: 20 | Sterile, RNase-free, DNase-free, and pyrogen-free | Graduated flask body | Individually packed in sterile resealable bags | Catalog ID: t-flask"
          ]
        ]
      }
    ]
  },
  {
    "id": "tc-treated-cell-culture-plate",
    "name": "TC-Treated Cell Culture Plate",
    "description": "Plasma TC-treated polystyrene cell culture plates, gamma sterile, endotoxin free, ideal for adherent cell culture, cytotoxicity assay, CRO and AIDD drug screening.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cell Culture Flasks"
    ],
    "image": "assets/catalog-products/catalog-dcc29088e873.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Polystyrene (PS)",
            "Individually sterile packed",
            "Well Format: 6-well | Surface Treatment: Plasma TC-treated | Sterilization: Gamma sterilized | Catalog ID: tc-treated-cell-culture-plate"
          ],
          [
            "Polystyrene (PS)",
            "Individually sterile packed",
            "Well Format: 12-well | Surface Treatment: Plasma TC-treated | Sterilization: Gamma sterilized | Catalog ID: tc-treated-cell-culture-plate"
          ],
          [
            "Polystyrene (PS)",
            "Individually sterile packed",
            "Well Format: 24-well | Surface Treatment: Plasma TC-treated | Sterilization: Gamma sterilized | Catalog ID: tc-treated-cell-culture-plate"
          ],
          [
            "Polystyrene (PS)",
            "Individually sterile packed",
            "Well Format: 48-well | Surface Treatment: Plasma TC-treated | Sterilization: Gamma sterilized | Catalog ID: tc-treated-cell-culture-plate"
          ],
          [
            "Polystyrene (PS)",
            "Individually sterile packed",
            "Well Format: 96-well | Surface Treatment: Plasma TC-treated | Sterilization: Gamma sterilized | Catalog ID: tc-treated-cell-culture-plate"
          ]
        ]
      }
    ]
  },
  {
    "id": "disposable-plastic-tissue-embedding-cassette",
    "name": "Disposable Plastic Tissue Embedding Cassette",
    "description": "Chemical resistant POM embedding cassettes, slanted labeling face, strip hole / micro mesh biopsy type, compatible with tissue processors, ideal for histopathology, IHC and CRO histology assay.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Tissue Embedding Cassettes"
    ],
    "image": "assets/catalog-products/catalog-fcf7e107c4ee.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Notes"
        ],
        "rows": [
          [
            "Catalog ID: disposable-plastic-tissue-embedding-cassette"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-flat-bottom-shake-flask",
    "name": "Flat-Bottom Shake Flask",
    "description": "Ideal for media preparation, mixing, and storage, including culture workflows for bacteria, fungi, and plant or animal cells.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cell Culture Flasks"
    ],
    "image": "assets/catalog-products/catalog-cbb6da990f99.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "cell culture Flasks",
            "40.701151",
            "PETG bottle body; PP cap",
            "125ml",
            "113.5x34x66mm",
            "24pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "cell culture Flasks",
            "40.702151",
            "PETG bottle body; PP cap",
            "250ml",
            "138.2x34x83mm",
            "12pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "cell culture Flasks",
            "40.703151",
            "PETG bottle body; PP cap",
            "500ml",
            "177.5x39x101mm",
            "12pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "cell culture Flasks",
            "40.704151",
            "PETG bottle body; PP cap",
            "1000ml",
            "211.5x39x127mm",
            "6pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "cell culture Flasks",
            "40.705111",
            "PETG bottle body; PP cap",
            "2800ml",
            "243x96.2x164mm",
            "6pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "cell culture Flasks",
            "40.706111",
            "PETG bottle body; PP cap",
            "5000ml",
            "523x96.2x228mm",
            "4pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-reaction-cuvettes",
    "name": "Reaction Cuvettes",
    "description": "Reaction cuvettes for laboratory sample handling and analysis.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cuvettes and Cells"
    ],
    "image": "assets/catalog-products/catalog-25e29d44d707.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material"
        ],
        "rows": [
          [
            "Polystyrene (PS)"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-serum-bottle",
    "name": "Serum Bottle",
    "description": "Containers for storing and transporting culture media, serum, buffers, and reagents.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cell Culture Flasks"
    ],
    "image": "assets/catalog-products/catalog-10f37307a261.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.724102",
            "PET bottle body; HDPE cap",
            "30ml",
            "Cap OD: 24.3 mm",
            "280pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.725102",
            "PET bottle body; HDPE cap",
            "60ml",
            "Cap OD: 28.8 mm",
            "200pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.720102",
            "PET bottle body; HDPE cap",
            "125ml",
            "Cap OD: 42.2 mm",
            "96pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.721102",
            "PET bottle body; HDPE cap",
            "250ml",
            "Cap OD: 42.2 mm",
            "60pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.722102",
            "PET bottle body; HDPE cap",
            "500ml",
            "Cap OD: 42.2 mm",
            "40pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.723102",
            "PET bottle body; HDPE cap",
            "1000ml",
            "Cap OD: 42.2 mm",
            "24pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.724111",
            "PETG bottle body; HDPE cap",
            "30ml",
            "Cap OD: 24.3 mm",
            "280pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.725111",
            "PETG bottle body; HDPE cap",
            "60ml",
            "Cap OD: 28.8 mm",
            "200pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.720111",
            "PETG bottle body; HDPE cap",
            "125ml",
            "Cap OD: 42.2 mm",
            "96pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.721111",
            "PETG bottle body; HDPE cap",
            "250ml",
            "Cap OD: 42.2 mm",
            "60pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.722111",
            "PETG bottle body; HDPE cap",
            "500ml",
            "Cap OD: 42.2 mm",
            "40pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.723111",
            "PETG bottle body; HDPE cap",
            "1000ml",
            "Cap OD: 42.2 mm",
            "24pcs/ctn",
            "Irradiation-sterilized; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-baffled-shake-flask",
    "name": "Baffled Shake Flask",
    "description": "Culture vessels for cell biology, microbiology, and molecular biology workflows, including bacterial and yeast culture.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cell Culture Flasks"
    ],
    "image": "assets/catalog-products/catalog-0a2a4d14f6d2.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.701171",
            "Polycarbonate (PC) bottle body; PP cap",
            "125ml",
            "113.5x31.2x66mm",
            "24pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.702171",
            "Polycarbonate (PC) bottle body; PP cap",
            "250ml",
            "138.2x31.2x83.3mm",
            "12pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.703171",
            "Polycarbonate (PC) bottle body; PP cap",
            "500ml",
            "177.5x36.34x100.8mm",
            "12pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.704171",
            "Polycarbonate (PC) bottle body; PP cap",
            "1000ml",
            "204.3x36.34x127mm",
            "6pcs/ctn",
            "Vented cap; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-disposable-pipette-reservoir-bottle",
    "name": "Disposable Pipette Reservoir Bottle",
    "description": "Disposable liquid reservoirs with leak integrity tested under 90 kPa vacuum for 180 seconds.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Carboys"
    ],
    "image": "assets/catalog-products/catalog-7edb6042ace9.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "70.731101",
            "PETG bottle body",
            "125ml",
            "1pcs/box,10boxes/ctn",
            "Outer tubing 1: thermoplastic, 3/16 in OD5/16, 60 cm Outer tubing 2: silicone, 3/16 in OD5/16, 8 cm Internal extension tubing: silicone, 1/8 in OD1/4 in , 13 cm"
          ],
          [
            "70.733101",
            "PETG bottle body",
            "250ml",
            "1pcs/box,10boxes/ctn",
            "Outer tubing 1: thermoplastic, 3/16 in OD5/16, 60 cm Outer tubing 2: silicone, 3/16 in OD5/16, 8 cm Internal extension tubing: silicone, 1/8 in OD1/4 in , 16 cm"
          ],
          [
            "70.735101",
            "PETG bottle body",
            "500ml",
            "1pcs/box,10boxes/ctn",
            "Outer tubing 1: thermoplastic, 3/16 in OD5/16, 60 cm Outer tubing 2: silicone, 3/16 in OD5/16, 8 cm Internal extension tubing: silicone, 1/8 in OD1/4 in , 20 cm"
          ],
          [
            "70.737101",
            "PETG bottle body",
            "1000ml",
            "1pcs/box,10boxes/ctn",
            "Outer tubing 1: thermoplastic, 3/16 in OD5/16, 60 cm Outer tubing 2: silicone, 3/16 in OD5/16, 8 cm Internal extension tubing: silicone, 1/8 in OD1/4 in , 24 cm"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-water-dispensing-carboy",
    "name": "Water Dispensing Carboy",
    "description": "Suitable for autoclaving large volumes of culture media, distilled water, and similar liquids.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Carboys"
    ],
    "image": "assets/catalog-products/catalog-398665e4c27e.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.747001",
            "PP body and cap; TPE cap seal",
            "10L",
            "8pcs/ctn",
            "Autoclavable at 121°C for up to 15 minutes; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.748001",
            "PP body and cap; TPE cap seal",
            "20L",
            "8pcs/ctn",
            "Autoclavable at 121°C for up to 15 minutes; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-storage-bottle",
    "name": "Storage Bottle",
    "description": "Containers for large-volume culture media, distilled water, and other liquids.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Plastic Bottles"
    ],
    "image": "assets/catalog-products/catalog-207dbc7bf821.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.739101",
            "Polycarbonate (PC) bottle body; PP cap",
            "2L",
            "8pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.740101",
            "Polycarbonate (PC) bottle body; PP cap",
            "5L",
            "8pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.741101",
            "Polycarbonate (PC) bottle body; PP cap",
            "10L",
            "8pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.742101",
            "Polycarbonate (PC) bottle body; PP cap",
            "20L",
            "8pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-storage-carboy",
    "name": "Storage Carboy",
    "description": "Suitable for autoclaving large volumes of culture media, distilled water, and similar liquids.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Carboys"
    ],
    "image": "assets/catalog-products/catalog-797822e6fd1f.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.743101",
            "PP body and cap; TPE cap seal",
            "4L",
            "22pcs/ctn",
            "Low-temperature resistant; recommended range: -140°C to 121°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.744101",
            "PP body and cap; TPE cap seal",
            "10L",
            "6pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.745101",
            "PP body and cap; TPE cap seal",
            "20L",
            "3pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.746101",
            "PP body and cap; TPE cap seal",
            "50L",
            "1pcs/ctn",
            "Low-temperature resistant; recommended range: -100°C to 100°C; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-wide-mouth-reagent-bottle",
    "name": "Wide-Mouth Reagent Bottle",
    "description": "Designed for storage of laboratory reagents.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Plastic Bottles"
    ],
    "image": "assets/catalog-products/catalog-e73afcff682c.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.613002",
            "PP",
            "8ml",
            "Bottle body OD: 24.8 mm × body height: 43 mm × inner neck diameter: 17.4 mm",
            "150pcs/bag,10bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.601002",
            "PP",
            "15ml",
            "Bottle body OD: 24.8 mm × body height: 56 mm × inner neck diameter: 17.4 mm",
            "120pcs/bag,10bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.602002",
            "PP",
            "30ml",
            "Bottle body OD: 34.2 mm × body height: 59.2 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,10bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.603002",
            "PP",
            "60ml",
            "Bottle body OD: 39 mm × body height: 81.5 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,5bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.604002",
            "PP",
            "125ml",
            "Bottle body OD: 50.7 mm × body height: 95.7 mm × inner neck diameter: 32.2 mm",
            "50pcs/bag,5bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.605002",
            "PP",
            "250ml",
            "Bottle body OD: 60.9 mm × body height: 127 mm × inner neck diameter: 36.9 mm",
            "25pcs/bag,8bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.606002",
            "PP",
            "500ml",
            "Bottle body OD: 73.2 mm × body height: 162.3 mm × inner neck diameter: 47.6 mm",
            "12pcs/bag,9bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.615002",
            "PP",
            "1000ml",
            "Bottle body OD: 91.9 mm × body height: 193.9 mm × inner neck diameter: 47.6 mm",
            "6pcs/bag,14bags/ctn",
            "Clear; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.613012",
            "PP",
            "8ml",
            "Bottle body OD: 24.8 mm × body height: 43 mm × inner neck diameter: 17.4 mm",
            "150pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.601012",
            "PP",
            "15ml",
            "Bottle body OD: 24.8 mm × body height: 56 mm × inner neck diameter: 17.4 mm",
            "120pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.602012",
            "PP",
            "30ml",
            "Bottle body OD: 34.2 mm × body height: 59.2 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.603012",
            "PP",
            "60ml",
            "Bottle body OD: 39 mm × body height: 81.5 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.604012",
            "PP",
            "125ml",
            "Bottle body OD: 50.7 mm × body height: 95.7 mm × inner neck diameter: 32.2 mm",
            "50pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.605012",
            "PP",
            "250ml",
            "Bottle body OD: 60.9 mm × body height: 127 mm × inner neck diameter: 36.9 mm",
            "25pcs/bag,8bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.606012",
            "PP",
            "500ml",
            "Bottle body OD: 73.2 mm × body height: 162.3 mm × inner neck diameter: 47.6 mm",
            "12pcs/bag,9bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.615012",
            "PP",
            "1000ml",
            "Bottle body OD: 91.9 mm × body height: 193.9 mm × inner neck diameter: 47.6 mm",
            "6pcs/bag,14bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.614002",
            "HDPE",
            "8ml",
            "Bottle body OD: 24.8 mm × body height: 43 mm × inner neck diameter: 17.4 mm",
            "150pcs/bag,10bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.607002",
            "HDPE",
            "15ml",
            "Bottle body OD: 24.8 mm × body height: 56 mm × inner neck diameter: 17.4 mm",
            "120pcs/bag,10bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.608002",
            "HDPE",
            "30ml",
            "Bottle body OD: 34.2 mm × body height: 59.2 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,10bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.609002",
            "HDPE",
            "60ml",
            "Bottle body OD: 39 mm × body height: 81.5 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,5bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.610002",
            "HDPE",
            "125ml",
            "Bottle body OD: 50.7 mm × body height: 95.7 mm × inner neck diameter: 32.2 mm",
            "50pcs/bag,5bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.611002",
            "HDPE",
            "250ml",
            "Bottle body OD: 60.9 mm × body height: 127 mm × inner neck diameter: 36.9 mm",
            "25pcs/bag,8bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.612002",
            "HDPE",
            "500ml",
            "Bottle body OD: 73.2 mm × body height: 162.3 mm × inner neck diameter: 47.6 mm",
            "12pcs/bag,9bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.616002",
            "HDPE",
            "1000ml",
            "Bottle body OD: 91.9 mm × body height: 193.9 mm × inner neck diameter: 47.6 mm",
            "6pcs/bag,14bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.614012",
            "HDPE",
            "8ml",
            "Bottle body OD: 24.8 mm × body height: 43 mm × inner neck diameter: 17.4 mm",
            "150pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.607012",
            "HDPE",
            "15ml",
            "Bottle body OD: 24.8 mm × body height: 56 mm × inner neck diameter: 17.4 mm",
            "120pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.608012",
            "HDPE",
            "30ml",
            "Bottle body OD: 34.2 mm × body height: 59.2 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.609012",
            "HDPE",
            "60ml",
            "Bottle body OD: 39 mm × body height: 81.5 mm × inner neck diameter: 24.9 mm",
            "100pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.610012",
            "HDPE",
            "125ml",
            "Bottle body OD: 50.7 mm × body height: 95.7 mm × inner neck diameter: 32.2 mm",
            "50pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.611012",
            "HDPE",
            "250ml",
            "Bottle body OD: 60.9 mm × body height: 127 mm × inner neck diameter: 36.9 mm",
            "25pcs/bag,8bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.612012",
            "HDPE",
            "500ml",
            "Bottle body OD: 73.2 mm × body height: 162.3 mm × inner neck diameter: 47.6 mm",
            "12pcs/bag,9bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.616012",
            "HDPE",
            "1000ml",
            "Bottle body OD: 91.9 mm × body height: 193.9 mm × inner neck diameter: 47.6 mm",
            "6pcs/bag,14bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-narrow-mouth-reagent-bottle",
    "name": "Narrow-Mouth Reagent Bottle",
    "description": "Designed for storage of laboratory reagents.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Plastic Bottles"
    ],
    "image": "assets/catalog-products/catalog-a7fe1c826b85.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.627002",
            "PP",
            "30ml",
            "Bottle body OD: 34 mm × body height: 61 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,10bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.625002",
            "PP",
            "60ml",
            "Bottle body OD: 39 mm × body height: 84.3 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,5bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.623002",
            "PP",
            "125ml",
            "Bottle body OD: 50.4 mm × body height: 97.9 mm × inner neck diameter: 21.2 mm",
            "50pcs/bag,5bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.621002",
            "PP",
            "250ml",
            "Bottle body OD: 60.8 mm × body height: 130 mm × inner neck diameter: 24.9 mm",
            "25pcs/bag,8bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.619002",
            "PP",
            "500ml",
            "Bottle body OD: 72.6 mm × body height: 167.8 mm × inner neck diameter: 25 mm",
            "12pcs/bag,9bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.617002",
            "PP",
            "1000ml",
            "Bottle body OD: 92 mm × body height: 212 mm × inner neck diameter: 34 mm",
            "6pcs/bag,14bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.627012",
            "PP",
            "30ml",
            "Bottle body OD: 34 mm × body height: 61 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,10bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.625012",
            "PP",
            "60ml",
            "Bottle body OD: 39 mm × body height: 84.3 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,5bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.623012",
            "PP",
            "125ml",
            "Bottle body OD: 50.4 mm × body height: 97.9 mm × inner neck diameter: 21.2 mm",
            "50pcs/bag,5bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.621012",
            "PP",
            "250ml",
            "Bottle body OD: 60.8 mm × body height: 130 mm × inner neck diameter: 24.9 mm",
            "25pcs/bag,8bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.619012",
            "PP",
            "500ml",
            "Bottle body OD: 72.6 mm × body height: 167.8 mm × inner neck diameter: 25 mm",
            "12pcs/bag,9bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.617012",
            "PP",
            "1000ml",
            "Bottle body OD: 92 mm × body height: 212 mm × inner neck diameter: 34 mm",
            "6pcs/bag,14bags/ctn",
            "Natural color; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.628002",
            "HDPE",
            "30ml",
            "Bottle body OD: 34 mm × body height: 61 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.626002",
            "HDPE",
            "60ml",
            "Bottle body OD: 39 mm × body height: 84.3 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.624002",
            "HDPE",
            "125ml",
            "Bottle body OD: 50.4 mm × body height: 97.9 mm × inner neck diameter: 21.2 mm",
            "50pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.622002",
            "HDPE",
            "250ml",
            "Bottle body OD: 60.8 mm × body height: 130 mm × inner neck diameter: 24.9 mm",
            "25pcs/bag,8bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.620002",
            "HDPE",
            "500ml",
            "Bottle body OD: 72.6 mm × body height: 167.8 mm × inner neck diameter: 25 mm",
            "12pcs/bag,9bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.618002",
            "HDPE",
            "1000ml",
            "Bottle body OD: 92 mm × body height: 212 mm × inner neck diameter: 34 mm",
            "6pcs/bag,14bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.628012",
            "HDPE",
            "30ml",
            "Bottle body OD: 34 mm × body height: 61 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,10bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.626012",
            "HDPE",
            "60ml",
            "Bottle body OD: 39 mm × body height: 84.3 mm × inner neck diameter: 17.4 mm",
            "100pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.624012",
            "HDPE",
            "125ml",
            "Bottle body OD: 50.4 mm × body height: 97.9 mm × inner neck diameter: 21.2 mm",
            "50pcs/bag,5bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.622012",
            "HDPE",
            "250ml",
            "Bottle body OD: 60.8 mm × body height: 130 mm × inner neck diameter: 24.9 mm",
            "25pcs/bag,8bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.620012",
            "HDPE",
            "500ml",
            "Bottle body OD: 72.6 mm × body height: 167.8 mm × inner neck diameter: 25 mm",
            "12pcs/bag,9bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ],
          [
            "40.618012",
            "HDPE",
            "1000ml",
            "Bottle body OD: 92 mm × body height: 212 mm × inner neck diameter: 34 mm",
            "6pcs/bag,14bags/ctn",
            "Amber; pyrogen-free; endotoxin-free; DNase/RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-extraction-tubes",
    "name": "Extraction Tubes",
    "description": "For transferring liquids used in industrial chemistry, environmental monitoring, biochemistry, nucleic acid and antigen assays, and reagent buffers.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-67566db2d377.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.930020",
            "PP/PE dropper tip; PE pipette",
            "2.4ml",
            "62mmx12.3mm",
            "300pcs/bag,10bags/ctn",
            "PE tube with PS dropper tip"
          ],
          [
            "40.930021",
            "PP/PE dropper tip; PE pipette",
            "2.4ml",
            "62mmx12.3mm",
            "300pcs/bag,10bags/ctn",
            "PE tube with PS dropper tip and filter"
          ],
          [
            "40.931002",
            "PP/PE dropper tip; PE pipette",
            "2.54ml",
            "50mmx9.5mm",
            "500pcs/bag,10bags/ctn",
            "PE double-cap design"
          ],
          [
            "40.932002",
            "PP/PE dropper tip; PE pipette",
            "2.17ml",
            "39.5mmx10mm",
            "500pcs/bag,10bags/ctn",
            "PE single-cap design"
          ],
          [
            "40.933001",
            "PP/PE dropper tip; PE pipette",
            "2.19ml",
            "50mmx8mm",
            "300pcs/bag,10bags/ctn",
            "PP screw-cap design"
          ],
          [
            "40.934001",
            "PP/PE dropper tip; PE pipette",
            "2.17ml",
            "100mmx10mm",
            "1000pcs/bag,10bags/ctn",
            "TPU dual-connector design"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-microcentrifuge-storage-tubes",
    "name": "Microcentrifuge Storage Tubes",
    "description": "For liquid storage and transport, and protein blotting workflows.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cryovials"
    ],
    "image": "assets/catalog-products/catalog-08cc3013708b.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.507101",
            "Polypropylene (PP)",
            "0.5ml",
            "Neck thread OD: 11 mm × thread pitch: 2 mm × height45 mm",
            "5000pcs/ctn",
            "Sterile; clear"
          ],
          [
            "40.506101",
            "Polypropylene (PP)",
            "1.5ml",
            "Neck thread OD: 11 mm × thread pitch: 2 mm × height45 mm",
            "5000pcs/ctn",
            "Sterile; clear"
          ],
          [
            "40.505101",
            "Polypropylene (PP)",
            "2ml",
            "Neck thread OD: 11 mm × thread pitch: 2 mm × height45 mm",
            "5000pcs/ctn",
            "Sterile; clear"
          ],
          [
            "40.507111",
            "Polypropylene (PP)",
            "0.5ml",
            "Neck thread OD: 11 mm × thread pitch: 2 mm × height45 mm",
            "5000pcs/ctn",
            "Sterile; amber"
          ],
          [
            "40.506111",
            "Polypropylene (PP)",
            "1.5ml",
            "Neck thread OD: 11 mm × thread pitch: 2 mm × height45 mm",
            "5000pcs/ctn",
            "Sterile; amber"
          ],
          [
            "40.505111",
            "Polypropylene (PP)",
            "2ml",
            "Neck thread OD: 11 mm × thread pitch: 2 mm × height45 mm",
            "5000pcs/ctn",
            "Sterile; amber"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-round-bottom-centrifuge-tubes",
    "name": "Round-Bottom Centrifuge Tubes",
    "description": "For separating samples by centrifugation.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-a0e2a58c1a6e.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "PP tube body; PE cap",
            "15ml",
            "50pcs/bag,10bags/ctn",
            "Irradiation-sterilized and leak-tested; pyrogen-free; endotoxin-free; low extractables; temperature tolerance: -80°C to 121°C"
          ],
          [
            "PP tube body; PE cap",
            "50ml",
            "25pcs/bag,20bags/ctn",
            "Irradiation-sterilized and leak-tested; pyrogen-free; endotoxin-free; low extractables; temperature tolerance: -80°C to 121°C"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-conical-centrifuge-tubes",
    "name": "Conical Centrifuge Tubes",
    "description": "For separating samples by centrifugation.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-291b4db9cd66.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.515101",
            "PP tube body; PE cap",
            "15ml",
            "50pcs/bag,10bags/ctn",
            "Irradiation-sterilized and leak-tested; pyrogen-free; endotoxin-free; low extractables; temperature tolerance: -80°C to 121°C"
          ],
          [
            "40.516101",
            "PP tube body; PE cap",
            "50ml",
            "25pcs/bag,20bags/ctn",
            "Irradiation-sterilized and leak-tested; pyrogen-free; endotoxin-free; low extractables; temperature tolerance: -80°C to 121°C"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-self-standing-centrifuge-tubes",
    "name": "Self-Standing Centrifuge Tubes",
    "description": "Self-standing tubes for sample handling and centrifugation.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-5c4630cbc620.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.D0357",
            "PP tube body; PE cap",
            "50ml",
            "25pcs/bag,20bags/ctn",
            "Irradiation-sterilized and leak-tested; pyrogen-free; endotoxin-free; low extractables; temperature tolerance: -80°C to 121°C"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-rack-packed-pipette-tips",
    "name": "Rack-Packed Pipette Tips",
    "description": "Designed for use with pipettes to transfer small and microliter volumes.",
    "categories": [
      "General Plasticware",
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Transfer Pipettes"
    ],
    "image": "assets/catalog-products/catalog-c4b4d91968ec.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.102132",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended (46mm); box-packed; sterile"
          ],
          [
            "40.102113",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterileclear"
          ],
          [
            "40.108122",
            "Polypropylene (PP)",
            "20ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile"
          ],
          [
            "40.110022",
            "Polypropylene (PP)",
            "100ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile"
          ],
          [
            "40.104132",
            "Polypropylene (PP)",
            "200ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended (60mm); box-packed; sterile"
          ],
          [
            "40.104113",
            "Polypropylene (PP)",
            "200ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile; light yellow"
          ],
          [
            "40.106122",
            "Polypropylene (PP)",
            "1000ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile"
          ],
          [
            "40.106113",
            "Polypropylene (PP)",
            "1000ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile; light blue"
          ],
          [
            "40.101122",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box,50boxes/ctn",
            "non-filtered; DNase/RNase-free, extended (46mm); box-packed; sterile"
          ],
          [
            "40.102123",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box,50boxes/ctn",
            "non-filtered; DNase/RNase-free, extended; box-packed; sterile; clear"
          ],
          [
            "40.109122",
            "Polypropylene (PP)",
            "100ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile"
          ],
          [
            "40.103122",
            "Polypropylene (PP)",
            "200ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile"
          ],
          [
            "40.104123",
            "Polypropylene (PP)",
            "200ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile; light yellow"
          ],
          [
            "40.105122",
            "Polypropylene (PP)",
            "1000ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile"
          ],
          [
            "40.106123",
            "Polypropylene (PP)",
            "1000ul",
            "96pcs/box,50boxes/ctn",
            "filtered; DNase/RNase-free, extended; box-packed; sterile; light blue"
          ],
          [
            "40.102111",
            "Polypropylene (PP)",
            "10ul",
            "1000pcs/bag,40bags/ctn",
            "filtered; DNase/RNase-free, extended (46mm); bag-packed; sterile"
          ],
          [
            "40.102151",
            "Polypropylene (PP)",
            "10ul",
            "4000pcs/bag,10bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile; clear"
          ],
          [
            "40.108111",
            "Polypropylene (PP)",
            "20ul",
            "1000pcs/bag,20bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile"
          ],
          [
            "40.110111",
            "Polypropylene (PP)",
            "100ul",
            "1000pcs/bag,20bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile"
          ],
          [
            "40.104111",
            "Polypropylene (PP)",
            "200ul",
            "1000pcs/bag,20bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile"
          ],
          [
            "40.104151",
            "Polypropylene (PP)",
            "200ul",
            "2000pcs/bag,10bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile; light yellow"
          ],
          [
            "40.106111",
            "Polypropylene (PP)",
            "1000ul",
            "1000pcs/bag,10bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile"
          ],
          [
            "40.106151",
            "Polypropylene (PP)",
            "1000ul",
            "500pcs/bag,10bags/ctn",
            "filtered; DNase/RNase-free, extended; bag-packed; sterile; light blue"
          ],
          [
            "40.101111",
            "Polypropylene (PP)",
            "10ul",
            "1000pcs/bag,40bags/ctn",
            "non-filtered; DNase/RNase-free, extended; bag-packed (46mm); sterile"
          ],
          [
            "40.102021",
            "Polypropylene (PP)",
            "10ul",
            "4000pcs/bag,10bags/ctn",
            "non-filtered; DNase/RNase-free, extended; bag-packed; non-sterile; clear"
          ],
          [
            "40.109111",
            "Polypropylene (PP)",
            "100ul",
            "1000pcs/bag,20bags/ctn",
            "non-filtered; DNase/RNase-free, extended; bag-packed; sterile"
          ],
          [
            "40.103111",
            "Polypropylene (PP)",
            "200ul",
            "1000pcs/bag,20bags/ctn",
            "non-filtered; DNase/RNase-free, extended; bag-packed; sterile"
          ],
          [
            "40.104021",
            "Polypropylene (PP)",
            "200ul",
            "2000pcs/bag,10bags/ctn",
            "non-filtered; DNase/RNase-free, extended; bag-packed; non-sterile; light yellow"
          ],
          [
            "40.105111",
            "Polypropylene (PP)",
            "1000ul",
            "1000pcs/bag,10bags/ctn",
            "non-filtered; DNase/RNase-free, extended (102mm); bag-packed; sterile"
          ],
          [
            "40.106021",
            "Polypropylene (PP)",
            "1000ul",
            "500pcs/bag,10bags/ctn",
            "non-filtered; DNase/RNase-free, extended; bag-packed; non-sterile; light blue"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-universal-pipette-tips",
    "name": "Universal Pipette Tips",
    "description": "Designed for use with pipettes to transfer small and microliter volumes.",
    "categories": [
      "General Plasticware",
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Transfer Pipettes"
    ],
    "image": "assets/catalog-products/catalog-34966e3587a5.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "101102-02",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box,50boxes/ctn",
            "32mm,irradiation-sterilized"
          ],
          [
            "102102-02",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box,50boxes/ctn",
            "32mm,filtered; irradiation-sterilized"
          ],
          [
            "111102-02",
            "Polypropylene (PP)",
            "10ul",
            "96pcs/box",
            "32mm,irradiation-sterilized"
          ],
          [
            "101101-02",
            "Polypropylene (PP)",
            "10ul",
            "1000pcs/bag,40bags/ctn",
            "32mm,irradiation-sterilized"
          ],
          [
            "102101-02",
            "Polypropylene (PP)",
            "10ul",
            "1000pcs/bag,40bags/ctn",
            "32mm,filtered"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-v-bottom-reagent-reservoir",
    "name": "V-Bottom Reagent Reservoir",
    "description": "A single-channel V-bottom design supports sample recovery, while the wide base improves stability.",
    "categories": [
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Reservoirs"
    ],
    "image": "assets/catalog-products/catalog-35d9be4ac321.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.196101",
            "PS",
            "50ml",
            "149mmx65mmx26.2mm",
            "1pcs/bag,100pcs/ctn",
            "pyrogen-free; endotoxin-free; DNase/RNase-free; irradiation-sterilized"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-96-well-pcr-plate",
    "name": "96-Well PCR Plate",
    "description": "Designed for compatibility with most automated laboratory instruments.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "PCR Plates"
    ],
    "image": "assets/catalog-products/catalog-a2ed74d1588a.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.205001",
            "0.1ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,no skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.205011",
            "0.1ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,no skirt; white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.206001",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,no skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.206011",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,no skirt; white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.207001",
            "0.1ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,half skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.207011",
            "0.1ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,half skirt; white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.208001",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,half skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.208011",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,half skirt; white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.209001",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,wide skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.209011",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "V-cut,wide skirt; white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.206001-1",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "No V-cut,no skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.207011-1",
            "0.1ml",
            "10pcs/box,5boxes/ctn",
            "No V-cut,half skirt; white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.208001-1",
            "0.2ml",
            "10pcs/box,5boxes/ctn",
            "No V-cut,half skirt; clear; pyrogen-free; endotoxin-free; low extractables"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-8-strip-pcr-tubes-with-optical-flat-caps",
    "name": "8-Strip PCR Tubes with Optical Flat Caps",
    "description": "Compatible with most automated laboratory instruments; directional keying helps identify orientation.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-a6f2faa09a2f.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Capacity",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.203001",
            "Polypropylene (PP)",
            "0.1ml",
            "125pcs/box,10boxes/ctn",
            "clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.203011",
            "Polypropylene (PP)",
            "0.1ml",
            "125pcs/box,10boxes/ctn",
            "white; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.204001",
            "Polypropylene (PP)",
            "0.2ml",
            "125pcs/box,10boxes/ctn",
            "clear; pyrogen-free; endotoxin-free; low extractables"
          ],
          [
            "40.204011",
            "Polypropylene (PP)",
            "0.2ml",
            "125pcs/box,10boxes/ctn",
            "white; pyrogen-free; endotoxin-free; low extractables"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-plate-sealing-film-and-aluminum-foil-seals",
    "name": "Plate Sealing Film and Aluminum Foil Seals",
    "description": "For PCR, assay, and deep-well plates; designed to limit evaporation and allow easy piercing.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Sealing Mats and Films"
    ],
    "image": "assets/catalog-products/catalog-444a232e751b.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.218001",
            "Aluminum with hot-melt adhesive layer",
            "125x83mm",
            "100pcs/bag,15000pcs/ctn",
            "Heat-sealable and peelable for convenient transport; suitable for PCR/qPCR and general liquid storage and transport; sealing temperature: 155–170°C for 3–5 s; operating temperature: -20°C to 120°C"
          ],
          [
            "40.218011",
            "Aluminum with hot-melt adhesive layer",
            "125x83mm",
            "100pcs/bag,15000pcs/ctn",
            "Heat-sealable and easy-peel for convenient transport; suitable for PCR/qPCR and general liquid storage and transport; sealing temperature: 155–170°C for 3–5 s; operating temperature: -20°C to 120°C"
          ],
          [
            "40.218021",
            "Aluminum with acrylic adhesive layer",
            "129.1x83mm",
            "100pcs/bag,15000pcs/ctn",
            "Heat-sealable and peelable for storage and transport; suitable for PCR, low-temperature storage, and pierceable applications; apply at ambient temperature; operating temperature: -60°C to 90°C"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-disposable-sterility-testing-manifold",
    "name": "Disposable Sterility Testing Manifold",
    "description": "Disposable two-channel sterility testing manifold with a 125 mL AS tube body, ABS base and needle seat, and 0.22 μm PTFE/MCE filtration components.",
    "categories": [
      "Filtration Consumables"
    ],
    "applications": [
      "Filtration Manifolds"
    ],
    "image": "assets/catalog-products/catalog-8c7806f58917.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.D724103",
            "ABS/AS/PTFE/MCE",
            "18bags/box,72bags/ctn",
            "Sterilization method: ethylene oxide (EO)"
          ],
          [
            "40.D725103",
            "ABS/AS/PTFE/MCE",
            "14bags/box,56bags/ctn",
            "Sterilization method: ethylene oxide (EO)"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-24-well-deep-well-plate-with-magnetic-sleeve",
    "name": "24-Well Deep Well Plate with Magnetic Sleeve",
    "description": "For sample identification and storage, robotic sampling, and automated pipetting systems.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Deep Well Plates"
    ],
    "image": "assets/catalog-products/catalog-4d4722dee226.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "40.303002",
            "Polypropylene (PP)",
            "127.2x85.2x43.9mm",
            "5pcs/bag,10bags/ctn",
            "For 24-well square-well conical-bottom deep-well plates only"
          ],
          [
            "40.304002",
            "Polypropylene (PP)",
            "127.6x85.4x44.1mm",
            "5pcs/bag,10bags/ctn",
            "24-well square-well conical-bottom deep-well plate with magnetic sleeve"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-8-channel-magnetic-rod-sleeve",
    "name": "8-Channel Magnetic Rod Sleeve",
    "description": "For sample identification and storage, robotic sampling, and automated pipetting systems.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Deep Well Plates"
    ],
    "image": "assets/catalog-products/catalog-75f3e8d2ce75.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "SKU",
          "Material",
          "Dimensions",
          "Packing",
          "Notes"
        ],
        "rows": [
          [
            "Round-Bottom, Clear",
            "40.307002",
            "Polypropylene (PP)",
            "104.9x13.9x46.7mm",
            "2pcs/bag,10bags/box,10boxes/ctn",
            "pyrogen-free; DNase-free; RNase-free"
          ],
          [
            "Conical-Bottom, Clear",
            "40.308002",
            "Polypropylene (PP)",
            "104.9x13.9x46.7mm",
            "2pcs/bag,10bags/box,10boxes/ctn",
            "pyrogen-free; DNase-free; RNase-free"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-hemocytometers",
    "name": "Hemocytometers",
    "description": "",
    "categories": [
      "Anatomy, Pathology & Clinical Supplies"
    ],
    "applications": [
      "Hemocytometers"
    ],
    "image": "assets/catalog-products/catalog-d3ec3aee5e5f.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Dimensions"
        ],
        "rows": [
          [
            "Standard Neubauer Hemocytometer",
            "Glass",
            "35x75mm"
          ],
          [
            "Chrome-Plated Neubauer Hemocytometer",
            "",
            ""
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-puncturable-screw-cap-urine-sediment-tube",
    "name": "Puncturable Screw-Cap Urine Sediment Tube",
    "description": "For urine sediment collection and handling, with a puncturable screw cap.",
    "categories": [
      "Anatomy, Pathology & Clinical Supplies"
    ],
    "applications": [
      "Specimen Collection Containers"
    ],
    "image": "assets/catalog-products/catalog-b9b5e9ed3073.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material"
        ],
        "rows": [
          [
            "PP/PS"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-ultrafiltration-centrifuge-tubes",
    "name": "Ultrafiltration Centrifuge Tubes",
    "description": "Disposable, non-sterile 15 mL ultrafiltration tubes for research use. Evaluate recovery and retention before first use.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Centrifuge Tubes"
    ],
    "image": "assets/catalog-products/catalog-9de64099df17.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Material",
          "Capacity"
        ],
        "rows": [
          [
            "PC ultrafiltration insert; PP collection tube",
            "5KD"
          ],
          [
            "PC ultrafiltration insert; PP collection tube",
            "10KD"
          ],
          [
            "PC ultrafiltration insert; PP collection tube",
            "30KD"
          ],
          [
            "PC ultrafiltration insert; PP collection tube",
            "50KD"
          ],
          [
            "PC ultrafiltration insert; PP collection tube",
            "100KD"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-sbs-format-2d-barcode-cryovials",
    "name": "SBS-Format 2D Barcode Cryovials",
    "description": "Barcode-enabled cryovials for sample identification and traceable cryogenic storage.",
    "categories": [
      "General Plasticware"
    ],
    "applications": [
      "Cryovials"
    ],
    "image": "assets/catalog-products/catalog-f6c6e9181075.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Capacity"
        ],
        "rows": [
          [
            "0.5ml"
          ],
          [
            "0.75ml"
          ],
          [
            "1ml"
          ],
          [
            "1.8ml"
          ],
          [
            "5ml"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-disposable-plastic-specimen-cups",
    "name": "Disposable Plastic Specimen Cups",
    "description": "For collection and handling of stool and urine specimens.",
    "categories": [
      "Anatomy, Pathology & Clinical Supplies"
    ],
    "applications": [
      "Specimen Collection Containers"
    ],
    "image": "assets/catalog-products/catalog-afcedc475211.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Product Type",
          "Material",
          "Capacity",
          "Dimensions"
        ],
        "rows": [
          [
            "Stool Cup",
            "PS",
            "5ml",
            "Base diameter: 12 mm cap diameter: 15 mm opening diameter: 11 mm overall height: 72 mm"
          ],
          [
            "Stool Cup",
            "PS",
            "10ml",
            "Base diameter: 22 mm cap diameter: 28 mm opening diameter: 20 mm overall height: 58 mm"
          ],
          [
            "Stool Cup",
            "PS",
            "30ml",
            "Base diameter: 24 mm cap diameter: 28 mm opening diameter: 22 mm overall height92 mm"
          ],
          [
            "Stool Cup",
            "PP",
            "40ml",
            "Base diameter: 38 mm cap diameter: 44 mm opening diameter: 37.9 mm overall height: 48.8 mm"
          ],
          [
            "Stool Cup",
            "PP",
            "60ml",
            "Base diameter: 42 mm cap diameter: 47 mm opening diameter: 41 mm overall height: 54 mm"
          ],
          [
            "Urine Cup",
            "PS",
            "10ml",
            "Base diameter: 22 mm cap diameter: 28 mm opening diameter: 20 mm overall height: 58 mm"
          ],
          [
            "Urine Cup",
            "PS",
            "30ml",
            "Base diameter: 24 mm cap diameter: 28 mm opening diameter: 22 mm overall height92 mm"
          ],
          [
            "Urine Cup",
            "PP",
            "40ml",
            "Base diameter: 38 mm cap diameter: 44 mm opening diameter: 37.9 mm overall height: 48.8 mm"
          ],
          [
            "Urine Cup",
            "PP",
            "60ml",
            "Base diameter: 42 mm cap diameter: 47 mm opening diameter: 41 mm overall height: 54 mm"
          ],
          [
            "Urine Cup",
            "PP",
            "90ml",
            "Base diameter: 49 mm cap diameter: 59 mm opening diameter: 52 mm overall height: 64 mm"
          ],
          [
            "Vacuum Urine Cup",
            "PP",
            "60ml",
            "Base diameter: 41 mm cap diameter: 54 mm opening diameter: 47 mm overall height: 62.7 mm"
          ],
          [
            "Vacuum Urine Cup",
            "PP",
            "90ml",
            "Base diameter: 58 mm cap diameter: 51 mm opening diameter: 52 mm overall height: 70 mm"
          ],
          [
            "Vacuum Urine Cup",
            "PP",
            "100ml",
            "Base diameter: 49 mm cap diameter: 64 mm opening diameter: 58 mm overall height: 74.7 mm"
          ],
          [
            "Vacuum Urine Cup",
            "PP",
            "120ml",
            "Base diameter: 61 mm cap diameter: 56 mm opening diameter: 55 mm overall height: 74 mm"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-bottle-top-dispenser",
    "name": "Bottle-Top Dispenser",
    "description": "Suitable for dispensing weak acid and weak alkaline solutions.",
    "categories": [
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Bottle-Top Dispensers"
    ],
    "image": "assets/catalog-products/catalog-034b48343851.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Capacity"
        ],
        "rows": [
          [
            "DA-2.5ML",
            "0.5-2.5ml"
          ],
          [
            "DA-5ML",
            "1-5ml"
          ],
          [
            "DA-10ML",
            "2-10ml"
          ],
          [
            "DA-30ML",
            "5-30ml"
          ],
          [
            "DA-60ML",
            "10-60ml"
          ],
          [
            "DA-2.5Pro",
            "0.5-2.5ml"
          ],
          [
            "DA-5Pro",
            "1-5ml"
          ],
          [
            "DA-10Pro",
            "2-10ml"
          ],
          [
            "DA-30Pro",
            "5-30ml"
          ],
          [
            "DA-60Pro",
            "10-60ml"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-micropipette",
    "name": "Micropipette",
    "description": "Pipettes for accurate transfer of microliter volumes.",
    "categories": [
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Mechanical Pipettes"
    ],
    "image": "assets/catalog-products/catalog-437f93bac825.jpeg",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Capacity"
        ],
        "rows": [
          [
            "M0.5-10ul",
            "0.5-10ul"
          ],
          [
            "M2-20ul",
            "2-20ul"
          ],
          [
            "M5-50ul",
            "5-50ul"
          ],
          [
            "M10-100ul",
            "10-100ul"
          ],
          [
            "M20-200ul",
            "20-200ul"
          ],
          [
            "M100-1000ul",
            "0-1000ul"
          ],
          [
            "M500-5000ul",
            "0-5000ul"
          ],
          [
            "M1-10ml",
            "1-10ml"
          ],
          [
            "X1-10ul",
            "1-10ul"
          ],
          [
            "X2-20ul",
            "2-20ul"
          ],
          [
            "X5-50ul",
            "5-50ul"
          ],
          [
            "X10-100ul",
            "10-100ul"
          ],
          [
            "X20-200ul",
            "20-200ul"
          ],
          [
            "X100-1000ul",
            "0-1000ul"
          ],
          [
            "X0.5-5ml",
            "0.5-5ml"
          ],
          [
            "X1-10ml",
            "1-10ml"
          ],
          [
            "Y0.5-10ul",
            "5-10ul"
          ],
          [
            "Y2-20ul",
            "2-20ul"
          ],
          [
            "Y5-50ul",
            "5-50ul"
          ],
          [
            "Y10-100ul",
            "10-100ul"
          ],
          [
            "Y20-200ul",
            "20-200ul"
          ],
          [
            "Y100-1000ul",
            "100-1000ul"
          ],
          [
            "Y1-10ml",
            "1-10ml"
          ],
          [
            "Y0.5-5ml",
            "0.5-5ml"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-large-volume-manual-pipette",
    "name": "Large-Volume Manual Pipette",
    "description": "Manual pipettes for accurate transfer of larger liquid volumes.",
    "categories": [
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Mechanical Pipettes"
    ],
    "image": "assets/catalog-products/catalog-79a61400784d.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "Capacity"
        ],
        "rows": [
          [
            "0.1-100ml"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-pipette-stand",
    "name": "Pipette Stand",
    "description": "Keeps pipettes organized and accessible between uses.",
    "categories": [
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Mechanical Pipettes"
    ],
    "image": "assets/catalog-products/catalog-555a6ab1a5d1.png",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Dimensions"
        ],
        "rows": [
          [
            "MPS-3",
            "150x90x225mm"
          ],
          [
            "MPS-6",
            "170x170x310mm"
          ],
          [
            "MPS-9",
            "170x170x310mm"
          ]
        ]
      }
    ]
  },
  {
    "id": "catalog-adjustable-multichannel-pipette",
    "name": "Adjustable Multichannel Pipette",
    "description": "Adjustable multichannel pipette for parallel liquid transfer across microplate wells.",
    "categories": [
      "Liquid Handling Consumables"
    ],
    "applications": [
      "Mechanical Pipettes"
    ],
    "image": "assets/catalog-products/adjustable-multichannel-pipette.jpeg",
    "specGroups": [
      {
        "title": "Product Specifications",
        "headers": [
          "SKU",
          "Capacity"
        ],
        "rows": [
          [
            "M8-10",
            "0.5-10ul"
          ],
          [
            "M8-50",
            "5-50ul"
          ],
          [
            "M8-300",
            "50-300ul"
          ],
          [
            "M12-10",
            "0.5-10ul"
          ],
          [
            "M12-50",
            "5-50ul"
          ],
          [
            "M12-300",
            "50-300ul"
          ]
        ]
      }
    ]
  }
];
