require_relative "../config/environment.rb"

describe Hero do
    subject(:hero) { 
        Hero.new([
            {
                name: "super strength",
                coolness: 3
            },
            {
                name: "flight",
                coolness: 5
            },
            {
                name: "lightning blast",
                coolness: 10
            } 
        ])
    }

    describe "#coolest_ability" do
        let(:coolest_ability) {
            {
                name: "lightning blast",
                coolness: 10
            }
        }
        
        it "should return hero's coolest ability" do
            expect(subject.coolest_ability).to eq(coolest_ability)
        end
    end

    describe "#ability_names" do
        it "should return a list of ability names" do
            expect(subject.ability_names).to include("super strength", "flight", "lightning blast")
        end
    end

    describe "#ordered_abilities" do
        let(:alphabetical_abilities) { ["flight", "lightning blast", "super strength"] }

        it "should return a list of ability names in alphabetical order" do
            expect(subject.ordered_abilities).to eq(alphabetical_abilities)
        end
    end

    describe "#add_ability" do
        context "if new ability is a hash" do
            let(:new_ability) {
                {
                    name: "Hammer Call",
                    coolness: 9
                }
            }

            it "should add the ability to the subject's abilities" do
                subject.add_ability(new_ability)
                expect(subject.abilities).to include(new_ability)
            end
        end

        context "if new ability is not a hash" do
            let(:string_ability) { "Hammer Call" }

            it "should not add an ability if it is not a hash" do
                subject.add_ability(string_ability)
                expect(subject.abilities).to_not include(string_ability)
            end
        end
    end
end