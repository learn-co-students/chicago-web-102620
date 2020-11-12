require_relative '../config/environment.rb'

describe Hero do
  subject(:hero) {
    Hero.new([
      {
        name: "Super Strength",
        coolness: 3
      },
      {
          name:"Flight",
          coolness: 5
      },
      {
          name: "Lightning Blast",
          coolness: 10
      }
    ])
  }

  describe "#coolest_ability" do
    let(:coolest_ability) {
      {
        name: "Lightning Blast",
        coolness: 10
      }
    }

    it "should return hero's coolest ability" do
      expect(hero.coolest_ability).to eq(coolest_ability)
    end
  end

  describe "#ordered_abilities" do
    let(:alphabetized_abilities) { ["Flight", "Lightning Blast", "Super Strength"] }

    it "should return a list of abiilty names in alphabetical order" do
      expect(hero.ordered_abilities).to eq(alphabetized_abilities)
    end
  end

  describe "#ability_names" do
    it "should return a list of ability names" do
      expect(hero.ability_names).to include("Flight", "Lightning Blast", "Super Strength")
    end
  end

  describe "#add_ability" do
    context "if the new ability is a hash" do
      
      let(:new_ability) { { name: "Hammer Call", coolness: 9 } }
      
      it "should add the ability to the subjects abilities" do
        hero.add_ability(new_ability)
        
        expect(hero.abilities).to include(new_ability)
      end
    end

    context "if the new ability is not a hash" do
      let(:string_ability) { "Hammer Call" }

      it "should not add the ability to the subjects abilities" do
        hero.add_ability(string_ability)

        expect(hero.abilities).to_not include(string_ability)
      end
    end
  end
end